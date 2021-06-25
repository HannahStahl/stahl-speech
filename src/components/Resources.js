import React, { useContext } from 'react';
import Context from './Context';

const Resources = () => {
  const { content } = useContext(Context);
  return content ? (
    <div>
      <div className="content-container resources">
        <div>
          {content.Resources.resources.map(({ name }) => (
            <div className="resource">
              <i className="fas fa-cloud-download-alt" />
              <h4 key={name}>{name}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  ) : <></>;
};

export default Resources;
