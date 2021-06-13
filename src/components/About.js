import React from 'react';
import content from '../content.json';
// import config from '../config';

const About = () => (
  <div>
    <div className="content-container about">
      <div className="img-placeholder"><p>INSERT HEADSHOT HERE</p></div>
      {/* <img src={`${config.publicCloudfrontURL}/dalefeuerjewelry-bio.jpg`} alt="Ally Stahl" /> */}
      {content.bio.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
    </div>
  </div>
);

export default About;
