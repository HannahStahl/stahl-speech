import React from 'react';
import content from '../content.json';

const Resources = () => (
  <div>
    <div className="content-container resources">
      <div>
        {content.resources.map((resource) => (
          <div className="resource">
            <i className="fas fa-cloud-download-alt" />
            <h4 key={resource}>{resource}</h4>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Resources;
