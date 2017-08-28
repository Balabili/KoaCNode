const router = require('koa-router'),
    signService = require('../service/signService.js'),
    config = require('../config.js');

let sign = new router();

sign.get('/login', async (ctx) => {
    let path = `https://github.com/login/oauth/authorize?client_id=${config.github.clientId}&state=1&redirect_uri=http://localhost:8090/sign/RegisteredByGithub`;
    ctx.redirect(path);
});

sign.get('/RegisteredByGithub', async (ctx) => {
    let path = `https://github.com/login/oauth/access_token?client_id=${config.github.clientId}&client_secret=${config.github.clientSecret}&code=${ctx.query.code}`, userData = null;
    await signService.post(path).then(function (data) {
        userData = data;
    });
    ctx.session.user = userData;
    await ctx.redirect('/');
});

sign.get('/logout', async (ctx) => {
    ctx.session.user = null;
    ctx.body = true;
});

module.exports = sign;