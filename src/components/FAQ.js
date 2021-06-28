import React, { useContext } from 'react';
import { Fade } from 'react-reveal';
import Context from './Context';
import PortableText from './PortableText';

const FAQ = () => {
  const { content } = useContext(Context);
  return content ? (
    <Fade>
      <div className="content-container">
        {content.Faq.questions.map(({ question, answerRaw }) => (
          <div key={question} className="faq">
            <h4>{question}</h4>
            <PortableText text={answerRaw} />
          </div>
        ))}
      </div>
    </Fade>
  ) : <div className="content-container" />;
};

export default FAQ;
