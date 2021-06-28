import React, { useContext } from 'react';
import { Fade } from 'react-reveal';
import Context from './Context';

const Testimonials = () => {
  const { content } = useContext(Context);
  return content ? (
    <Fade bottom cascade duration={1000}>
      <div className="content-container testimonials">
        {content.Testimonials.testimonials.map(({ quote, source }) => (
          <div key={source} className="testimonial">
            <p>{`“${quote}”`}</p>
            <p className="source">{`- ${source}`}</p>
          </div>
        ))}
      </div>
    </Fade>
  ) : <div className="content-container" />;
};

export default Testimonials;
