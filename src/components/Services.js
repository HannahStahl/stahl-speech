import React, { useContext } from 'react';
import { Fade } from 'react-reveal';
import Context from './Context';
import PortableText from './PortableText';
import config from '../config';

const Services = () => {
  const { content } = useContext(Context);
  return content ? (
    <div className="content-container">
      <Fade>
        <div className="who-we-serve">
          <div className="service-description">
            <h2>{content.Services.section1.title}</h2>
            <PortableText text={content.Services.section1.descriptionRaw} />
          </div>
          <img
            src={`${config.publicCloudfrontURL}/stahl-speech-who-we-serve.jpg`}
            alt={content.Services.section1.title}
          />
        </div>
      </Fade>
      <hr />
      <Fade>
        <div>
          <h2>{content.Services.section2.title}</h2>
          <Fade bottom cascade duration={1000}>
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
          </Fade>
        </div>
      </Fade>
      <hr />
      <Fade>
        <div>
          <h2>{content.Services.section3.title}</h2>
          <PortableText text={content.Services.section3.descriptionRaw} />
        </div>
      </Fade>
    </div>
  ) : <div className="content-container" />;
};

export default Services;
