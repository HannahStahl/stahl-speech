import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import Context from './Context';
import PortableText from './PortableText';
import config from '../config';

const Home = () => {
  const { content } = useContext(Context);
  return content ? (
    <div className="home">
      <img src={`${config.publicCloudfrontURL}/stahl-speech-home-flipped.jpg`} alt={config.businessName} className="home-page-image" />
      <div>
        <h1>{content.Home.title}</h1>
        <PortableText text={content.Home.descriptionRaw} />
        <NavLink to="/services"><Button size="lg">Learn more</Button></NavLink>
      </div>
    </div>
  ) : <></>;
};

export default Home;
