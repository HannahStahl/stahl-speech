import React, { useContext } from 'react';
import Context from './Context';

const Resources = () => {
  const { content } = useContext(Context);
  return content ? (
    <div>
      <div className="content-container resources">
        <div>
          {content.Resources.resources.map(({ name, file }) => (
            <a href={file.asset.url} target="_blank" rel="noopener noreferrer" className="resource">
              <i className="fas fa-file-pdf" />
              <h4 key={name}>{name}</h4>
            </a>
          ))}
        </div>
      </div>
    </div>
  ) : <></>;
};

export default Resources;
