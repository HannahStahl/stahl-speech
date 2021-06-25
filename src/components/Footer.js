import React from 'react';
import config from '../config';

const Footer = () => (
  <div className="footer">
    <p>
      <b>©</b>
      {` ${config.businessName}, ${(new Date()).getFullYear()}. All Rights Reserved.`}
    </p>
    <p>
      {config.phoneNumber}
      {' | '}
      {config.emailAddress}
      <span className="desktop"> | </span>
      <a href="https://websitesbyhannah.com" target="_blank" rel="noopener noreferrer" className="desktop">
        Websites by Hannah
      </a>
    </p>
    <a href="https://websitesbyhannah.com" target="_blank" rel="noopener noreferrer" className="mobile">
      Websites by Hannah
    </a>
  </div>
);

export default Footer;
