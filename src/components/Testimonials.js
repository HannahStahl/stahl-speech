import React, { useContext } from 'react';
import Context from './Context';

const Testimonials = () => {
  const { content } = useContext(Context);
  return content ? (
    <div>
      <div className="content-container testimonials">
        {content.Testimonials.testimonials.map(({ quote, source }) => (
          <div key={source} className="testimonial">
            <p>{`“${quote}”`}</p>
            <p className="source">{`- ${source}`}</p>
          </div>
        ))}
      </div>
    </div>
  ) : <></>;
};

export default Testimonials;
