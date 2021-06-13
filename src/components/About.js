import React from 'react';
import content from '../content.json';
// import config from '../config';

const About = () => (
  <div>
    <div className="content-container about">
      <div className="img-placeholder"><p>INSERT HEADSHOT HERE</p></div>
      {/* <img src={`${config.publicCloudfrontURL}/dalefeuerjewelry-bio.jpg`} alt="Ally Stahl" /> */}
      <div>
        <h2>About Ally</h2>
        {content.bio.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      </div>
    </div>
  </div>
);

export default About;
