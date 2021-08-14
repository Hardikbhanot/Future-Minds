const productionLogger = require('./loggers');
const developmentLogger = require('./loggers');

let logger = null;

// check NODE_ENV for environment
// don't write log messages in file in development

if (process.env.NODE_ENV === 'production') {
  logger = productionLogger();
} else {
  logger = developmentLogger();
}

module.exports = logger;
