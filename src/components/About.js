import React, { useContext } from 'react';
import { Fade } from 'react-reveal';
import Context from './Context';
import PortableText from './PortableText';
import config from '../config';

const About = () => {
  const { content } = useContext(Context);
  return content ? (
    <Fade>
      <div className="content-container about">
        <img src={`${config.publicCloudfrontURL}/stahl-speech-about.jpg`} alt="Ally Stahl" />
        <div>
          <h2>{content.About.title}</h2>
          <PortableText text={content.About.bioRaw} />
        </div>
      </div>
    </Fade>
  ) : <div className="content-container" />;
};

export default About;
