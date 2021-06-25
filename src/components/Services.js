import React, { useContext } from 'react';
import Context from './Context';
import PortableText from './PortableText';
import config from '../config';

const Services = () => {
  const { content } = useContext(Context);
  return content ? (
    <div>
      <div className="content-container services">
        <div key={content.Services.section1.title} className="service">
          <div className="service-description">
            <h2>{content.Services.section1.title}</h2>
            <PortableText text={content.Services.section1.descriptionRaw} />
          </div>
          <img src={`${config.publicCloudfrontURL}/stahl-speech-who-we-serve-2.jpeg`} alt={content.Services.section1.title} />
        </div>
        <div key={content.Services.section1.title} className="service reverse">
          <img src={`${config.publicCloudfrontURL}/stahl-speech-services-provided-2.jpeg`} alt={content.Services.section2.title} />
          <div className="service-description">
            <h2>{content.Services.section2.title}</h2>
            <PortableText text={content.Services.section2.descriptionRaw} />
          </div>
        </div>
      </div>
    </div>
  ) : <></>;
};

export default Services;
