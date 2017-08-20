const router = require('koa-router'),
    request = require('request'),
    https = require('https'),
    config = require('../config.js');

let sign = new router();

sign.get('/login', async (ctx) => {
    let path = `https://github.com/login/oauth/authorize?client_id=${config.github.clientId}&state=1&redirect_uri=http://localhost:8090/sign/RegisteredByGithub`;
    ctx.redirect(path);
});

sign.get('/RegisteredByGithub', async (ctx) => {
    let path = `https://github.com/login/oauth/access_token?client_id=${config.github.clientId}&client_secret=${config.github.clientSecret}&code=${ctx.query.code}`;
    request.post(path, function (err, res, body) {
        if (err) {
            return;
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
                request(options, (error, resp, data) => {
                   let result = JSON.parse(data);
                });
            }
        }
    });
});



module.exports = sign;