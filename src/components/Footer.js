import React from 'react';
import config from '../config';

const Footer = () => (
  <div className="footer">
    <p>
      <b>©</b>
      {` ${config.businessName}, ${(new Date()).getFullYear()}. All Rights Reserved.`}
    </p>
    <a href="https://websitesbyhannah.com" target="_blank" rel="noopener noreferrer">
      Websites by Hannah
    </a>
  </div>
);

export default Footer;
