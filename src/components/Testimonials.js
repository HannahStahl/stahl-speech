import React from 'react';
import content from '../content.json';

const Testimonials = () => (
  <div>
    <div className="content-container testimonials">
      {content.testimonials.map(({ quote, source }) => (
        <div key={source} className="testimonial">
          <p>{`“${quote}”`}</p>
          <p className="source">{`- ${source}`}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Testimonials;
