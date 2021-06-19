import React from 'react';
import content from '../content.json';
import config from '../config';

const About = () => (
  <div>
    <div className="content-container about">
      <img src={`${config.publicCloudfrontURL}/stahl-speech-about.jpg`} alt="Ally Stahl" />
      <div>
        <h2>About Ally</h2>
        {content.bio.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      </div>
    </div>
  </div>
);

export default About;
