import React from 'react';
import content from '../content.json';

const Services = () => (
  <div>
    <h1>Services</h1>
    <div className="content-container services">
      {content.services.map((service) => (
        <div key={service.header} className="service">
          <h2>{service.header}</h2>
          <p>{service.description}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Services;
