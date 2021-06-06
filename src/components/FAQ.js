import React from 'react';
import content from '../content.json';

const FAQ = () => (
  <div>
    <h1>FAQ</h1>
    <div className="content-container">
      {content.faq.map(({ question, answer }) => (
        <div key={question}>
          <h3>{question}</h3>
          <p>{answer}</p>
        </div>
      ))}
    </div>
  </div>
);

export default FAQ;
