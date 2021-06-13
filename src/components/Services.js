import React from 'react';
import content from '../content.json';
import config from '../config';

const Services = () => (
  <div>
    <div className="content-container services">
      {content.services.map(({ header, intro, description, image }, i) => (
        <div key={header} className={`service${i % 2 === 1 ? ' reverse' : ''}`}>
          {i % 2 === 1 && <img src={`${config.publicCloudfrontURL}/stahl-speech-${image}`} alt={header} />}
          <div className="service-description">
            <h2>{header}</h2>
            {intro && <p>{intro}</p>}
            <ul>{description.map((paragraph) => <li>{paragraph}</li>)}</ul>
          </div>
          {i % 2 === 0 && <img src={`${config.publicCloudfrontURL}/stahl-speech-${image}`} alt={header} />}
        </div>
      ))}
    </div>
  </div>
);

export default Services;
