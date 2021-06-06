import React from 'react';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import config from '../config';

const Home = () => (
  <div className="home">
    <img src={`${config.publicCloudfrontURL}/stahl-speech-home.png`} alt={config.businessName} className="home-page-image" />
    <div>
      <h1>Stahl Speech and Language Therapy</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
        do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <NavLink to="/services"><Button size="lg">Learn more</Button></NavLink>
    </div>
  </div>
);

export default Home;
