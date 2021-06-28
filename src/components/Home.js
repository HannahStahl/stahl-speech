import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import { Fade } from 'react-reveal';
import Context from './Context';
import PortableText from './PortableText';
import config from '../config';

const Home = () => {
  const { content } = useContext(Context);
  return content ? (
    <div className="content-container home">
      <div className="home-content">
        <img src={`${config.publicCloudfrontURL}/stahl-speech-home-flipped.jpg`} alt={config.businessName} className="home-page-image" />
        <Fade>
          <div>
            <h1>{content.Home.title}</h1>
            <PortableText text={content.Home.descriptionRaw} />
            <NavLink to="/services"><Button size="lg">Learn more</Button></NavLink>
          </div>
        </Fade>
      </div>
    </div>
  ) : <div className="content-container" />;
};

export default Home;
