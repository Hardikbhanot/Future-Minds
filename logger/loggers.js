const { createLogger, format, transports } = require('winston');
const { combine, timestamp, printf } = format;

const productionFormat = printf(({ message, label, timestamp }) => {
  return `[${label}] ${timestamp} message: ${message}`;
});

const developmentFormat = printf(({ message, label, timestamp }) => {
  return `[${label}] ${timestamp} message: ${message}`;
});

const productionLogger = () => {
  return createLogger({
    level: 'info',
    format: combine(timestamp(), productionFormat),
    transports: [
      new transports.Console(),
      new transports.File({ filename: 'productionLogs.log' })
    ]
  });
};

const developmentLogger = () => {
  return createLogger({
    level: 'debug',
    format: combine(
      format.colorize(),
      timestamp({ format: 'HH:mm:ss' }),
      developmentFormat
    ),
    transports: [new transports.Console()]
  });
};

module.exports = productionLogger;
module.exports = developmentLogger;
