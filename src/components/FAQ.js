import React from 'react';
import content from '../content.json';

const FAQ = () => (
  <div>
    <div className="content-container">
      {content.faq.map(({ question, answer }) => (
        <div key={question} className="faq">
          <h4>{question}</h4>
          {answer.map((paragraph) => <p>{paragraph}</p>)}
        </div>
      ))}
    </div>
  </div>
);

export default FAQ;
