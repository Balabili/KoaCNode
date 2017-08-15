const winston = require('winston'),
logger = new (winston.Logger)({
    transports: [
        new (winston.transports.File)({
            name: 'info',
            filename: 'logger/log-info.log',
            level: 'debug'
        }),
        new (winston.transports.File)({
            name: 'eror',
            filename: 'logger/log-error.log',
            level: 'error'
        })
    ]
});

module.exports = logger;