const mongoose = require('mongoose'),
    logger = require('../logger/logger.js'),
    DB_URL = 'mongodb://localhost:27017/cnode';

mongoose.connect(DB_URL);

mongoose.connection.on('connected', function () {
    logger.debug('Mongoose connection open to ' + DB_URL);
});

mongoose.connection.on('error', function (error) {
    logger.error('Mongoose connection error: ' + error);
});

mongoose.connection.on('disconnected', function () {
    logger.debug('Mongoose connection disconnected.');
});

module.exports = mongoose;