const winston = require("winston");

const logger = winston.createLogger({
  transports: [
    new winston.transports.File({
      filename: "logs/error.log",
      level: "error",
    }),
    new winston.transports.File({
      filename: "logs/warn.log",
      level: "warn",
    }),
    new winston.transports.File({
      filename: "logs/info.log",
      level: "info",
    }),
  ],
  format: winston.format.combine(
    winston.format.timestamp({ format: "DD-MMM-YYYY HH:mm:ss" }),
    winston.format.printf(
      (info) => `[${info.level}] [${info.timestamp}]: ${info.message}`
    )
  ),
});

module.exports = logger;