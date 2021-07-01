import React, { useContext } from 'react';
import { Fade } from 'react-reveal';
import Context from './Context';

const Testimonials = () => {
  const { content } = useContext(Context);
  return content ? (
    <div className="content-container">
      <Fade>
        <h2>{content.Testimonials.title}</h2>
      </Fade>
      <Fade right cascade>
        <div>
          {content.Testimonials.testimonials.map(({ quote, source }) => (
            <div key={source} className="testimonial">
              <p className="quote">{`“${quote}”`}</p>
              <p className="source">{`- ${source}`}</p>
            </div>
          ))}
        </div>
      </Fade>
    </div>
  ) : <div className="content-container" />;
};

export default Testimonials;
