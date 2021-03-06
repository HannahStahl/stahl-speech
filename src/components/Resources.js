import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import { Fade } from 'react-reveal';
import Context from './Context';

const Resources = () => {
  const { content } = useContext(Context);
  return content ? (
    <div className="content-container">
      <Fade>
        <h2 className="resources-title">{content.Resources.title}</h2>
        <div className="resources">
          {content.Resources.resources.map(({ name, file }) => (
            <a href={file.asset.url} target="_blank" rel="noopener noreferrer" className="resource">
              <i className="fas fa-file-pdf" />
              <h4 key={name}>{name}</h4>
            </a>
          ))}
        </div>
      </Fade>
      <Fade>
        <div className="patient-portal">
          <a href="https://stahlspeech.theranest.com" target="_blank" rel="noopener noreferrer">
            <Button size="lg">Patient Portal</Button>
          </a>
        </div>
      </Fade>
    </div>
  ) : <div className="content-container" />;
};

export default Resources;
