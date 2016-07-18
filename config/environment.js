var _ = require('lodash');

var localEnvVars = {
  TITLE:      'basal body temperature',
  SAFE_TITLE: 'bbt'
};

// Merge all environmental variables into one object.
module.exports = _.extend(process.env, localEnvVars);
