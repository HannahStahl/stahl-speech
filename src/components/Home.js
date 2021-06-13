import React from 'react';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import config from '../config';
import content from '../content.json';

const Home = () => (
  <div className="home">
    <img src={`${config.publicCloudfrontURL}/stahl-speech-home.png`} alt={config.businessName} className="home-page-image" />
    <div>
      <h1>Stahl Speech and Language Therapy</h1>
      <p>{content.intro}</p>
      <NavLink to="/services"><Button size="lg">Learn more</Button></NavLink>
    </div>
  </div>
);

export default Home;
