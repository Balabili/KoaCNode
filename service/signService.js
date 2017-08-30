const request = require('request'),
    logger = require('../logger/logger.js');

function getUserData(options) {
    return new Promise((resolve, reject) => {
        request(options, (error, resp, data) => {
            resolve(data);
        });
    });
}

async function post(opts) {
    return new Promise((resolve, reject) => {
        request.post(opts, function (err, res, body) {
            if (err) {
                return reject(err);
            }
            let params = body.split('&'), i = 0;
            for (i; i < params.length; i++) {
                let param = params[i].split('=');
                if (param[0] === 'access_token') {
                    const options = {
                        url: `https://api.github.com/user?access_token=${param[1]}`,
                        method: 'GET',
                        headers: {
                            'User-Agent': 'request'
                        }
                    };
                    getUserData(options).then(function (result) {
                        resolve(result);
                    }).catch(function (e) { logger.error(e); });
                }
            }
        });
    });
}

module.exports = { post: post };