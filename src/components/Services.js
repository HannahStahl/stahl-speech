import React, { useContext } from 'react';
import Context from './Context';
import PortableText from './PortableText';
import config from '../config';

const Services = () => {
  const { content } = useContext(Context);
  return content ? (
    <div className="content-container">
      <div className="who-we-serve">
        <div className="service-description">
          <h2>{content.Services.section1.title}</h2>
          <PortableText text={content.Services.section1.descriptionRaw} />
        </div>
        <img
          src={`${config.publicCloudfrontURL}/stahl-speech-services.jpeg`}
          alt={content.Services.section1.title}
        />
      </div>
      <hr />
      <div>
        <h2>{content.Services.section2.title}</h2>
        <div className="services-provided">
          <div className="service">
            <h4>{content.Services.section2.subsection1.title}</h4>
            <PortableText text={content.Services.section2.subsection1.descriptionRaw} />
          </div>
          <div className="service">
            <h4>{content.Services.section2.subsection2.title}</h4>
            <PortableText text={content.Services.section2.subsection2.descriptionRaw} />
          </div>
        </div>
      </div>
      <hr />
      <div>
        <h2>{content.Services.section3.title}</h2>
        <PortableText text={content.Services.section3.descriptionRaw} />
      </div>
    </div>
  ) : <div className="content-container" />;
};

export default Services;
