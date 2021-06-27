import React, { useContext, useState } from 'react';
import FormGroup from 'react-bootstrap/FormGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Context from './Context';
import PortableText from './PortableText';
import config from '../config';

const Contact = () => {
  const { content } = useContext(Context);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [buttonText, setButtonText] = useState('Send');

  const updateValue = (e, updateFcn) => {
    updateFcn(e.target.value);
    setButtonText('Send');
  };

  const validateForm = () => name.length > 0 && email.length > 0 && message.length > 0;

  const handleSubmit = (event) => {
    event.preventDefault();
    setButtonText('Sending...');
    fetch(config.emailURL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        message,
        userEmail: email,
        clientEmail: config.emailAddress,
        siteDomain: window.location.origin,
      }),
    }).then((response) => response.json()).then((json) => {
      if (json.MessageId) {
        setButtonText('Sent!');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setButtonText('Send');
        window.alert(`An error occurred with the contact form. Please send an email directly to ${config.emailAddress}.`);
      }
    });
  };

  return content ? (
    <div className="content-container contact">
      <PortableText text={content.Contact.noteRaw} />
      <form onSubmit={handleSubmit}>
        <FormGroup controlId="name">
          <FormControl
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => updateValue(e, setName)}
          />
        </FormGroup>
        <FormGroup controlId="email">
          <FormControl
            placeholder="Your email address"
            type="email"
            value={email}
            onChange={(e) => updateValue(e, setEmail)}
          />
        </FormGroup>
        <FormGroup controlId="message">
          <FormControl
            rows={10}
            as="textarea"
            placeholder="Your message"
            value={message}
            onChange={(e) => updateValue(e, setMessage)}
          />
        </FormGroup>
        <Button
          block
          type="submit"
          size="lg"
          disabled={!validateForm()}
        >
          {buttonText}
        </Button>
      </form>
    </div>
  ) : <div className="content-container" />;
};

export default Contact;
