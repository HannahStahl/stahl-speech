import React from 'react';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import config from '../config';

const Home = () => (
  <>
    <img src={`${config.publicCloudfrontURL}/template-home.jpg`} alt={config.businessName} className="home-page-image" />
    <div>
      <h1>Stahl Speech and Language Therapy</h1>
      <p>
        Providing exceptional and tailored speech and language services for the Greater Washington
        area.
      </p>
      <NavLink to="/about"><Button size="lg" variant="outline-dark">Learn more</Button></NavLink>
    </div>
  </>
);

export default Home;
