import React from 'react';
import content from '../content.json';

const Resources = () => (
  <div>
    <h1>Resources</h1>
    <ul className="content-container">
      {content.resources.map((resource) => <li key={resource}>{resource}</li>)}
    </ul>
  </div>
);

export default Resources;
