const dev = {
  apiURL: 'https://dlnum6f7kj.execute-api.us-east-1.amazonaws.com/dev',
  emailURL: 'https://c0mrk8va37.execute-api.us-east-1.amazonaws.com/dev/email/send',
  emailAddress: 'hannahstahl14@gmail.com',
};

const prod = {
  apiURL: 'https://lbe32id9hg.execute-api.us-east-1.amazonaws.com/prod',
  emailURL: 'https://aiikn63n03.execute-api.us-east-1.amazonaws.com/prod/email/send',
  emailAddress: 'ally@stahlspeech.com',
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  publicCloudfrontURL: 'https://d17jmxltsx3ffm.cloudfront.net',
  businessName: 'Stahl Speech and Language Therapy, LLC',
  ...config,
};
