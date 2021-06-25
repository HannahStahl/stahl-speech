import React, { useContext } from 'react';
import Context from './Context';
import PortableText from './PortableText';

const FAQ = () => {
  const { content } = useContext(Context);
  return content ? (
    <div>
      <div className="content-container">
        {content.Faq.questions.map(({ question, answerRaw }) => (
          <div key={question} className="faq">
            <h4>{question}</h4>
            <PortableText text={answerRaw} />
          </div>
        ))}
      </div>
    </div>
  ) : <></>;
};

export default FAQ;
