const dev = {
  emailURL: 'https://c0mrk8va37.execute-api.us-east-1.amazonaws.com/dev/email/send',
  emailAddress: 'hannahstahl14@gmail.com',
};

const prod = {
  emailURL: 'https://aiikn63n03.execute-api.us-east-1.amazonaws.com/prod/email/send',
  emailAddress: 'info@stahlspeech.com',
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  apiURL: 'https://gngm83ns.apicdn.sanity.io/v1/graphql/production/default',
  publicCloudfrontURL: 'https://d17jmxltsx3ffm.cloudfront.net',
  businessName: 'Stahl Speech and Language Therapy, LLC',
  phoneNumber: '301-392-7494',
  ...config,
};
