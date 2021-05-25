import React from 'react';
import content from '../content.json';

const Services = () => (
  <div>
    <h1>Services</h1>
    <div className="content-container services">
      {content.services.map(({ header, description }) => (
        <div key={header} className="service">
          <h2>{header}</h2>
          <p>{description}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Services;
