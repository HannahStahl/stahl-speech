import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Context from './Context';

const Resources = () => {
  const { content } = useContext(Context);
  return content ? (
    <div className="content-container">
      <div className="resources">
        {content.Resources.resources.map(({ name, file }) => (
          <a href={file.asset.url} target="_blank" rel="noopener noreferrer" className="resource">
            <i className="fas fa-file-pdf" />
            <h4 key={name}>{name}</h4>
          </a>
        ))}
      </div>
      <div className="pay-bill">
        <a href="https://google.com" target="_blank" rel="noopener noreferrer">
          <Button size="lg">Pay bill</Button>
        </a>
      </div>
    </div>
  ) : <div className="content-container" />;
};

export default Resources;
