const { createLogger, format, transports } = require('winston');
require('winston-daily-rotate-file');

const transport = new transports.DailyRotateFile({
    filename: '%DATE%.log',
    datePattern: 'YYYY-MM-DD',
    dirname: 'log',
    maxFiles: '1d',
});

const logger = createLogger({
    format: format.combine(
        format.errors({ stack: true }),
        format.splat(),
        format.json()
    ),
    transports: [
        transport,
        new transports.Console({
            format: format.combine(format.colorize(), format.simple()),
        }),
    ],
});

module.exports = logger;
