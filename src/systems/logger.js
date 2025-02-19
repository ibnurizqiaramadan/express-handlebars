import winston from 'winston';

// Define log levels
const levels = {
  error: 0,
  http: 1,
  warn: 2,
  info: 3,
  debug: 4,
};

// Determine log level based on environment
const level = () => {
  const env = process.env.NODE_ENV || 'development';
  return env === 'development' ? 'debug' : 'warn';
};

// Define colors for log levels
const colors = {
  error: 'red',
  warn: 'yellow',
  info: 'green',
  http: 'magenta',
  debug: 'white',
};

// Add colors to winston
winston.addColors(colors);

// Define log format
const format = winston.format.combine(
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
    winston.format.colorize({ all: true }),
    winston.format.printf((info) => `${info.timestamp} ${info.level}: ${info.message}`),
);

// Define log transports (outputs)
const transports = [
  new winston.transports.Console(),
  new winston.transports.File({
    filename: 'logs/error.log',
    level: 'error',
  }),
  new winston.transports.File({ filename: 'logs/all.log' }),
];

// Create logger instance
const Logger = winston.createLogger({
  level: level() || 'http',
  levels,
  format,
  transports,
});

export default Logger;
