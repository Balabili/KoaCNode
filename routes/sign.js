const router = require('koa-router'),
    signService = require('../service/signService.js'),
    userModel = require('../model/user.js'),
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
    if (userData) {
        let userObj = JSON.parse(userData), user = { name: userObj.login, email: userObj.email }, dbUser = null;
        ctx.session.user = userData;
        dbUser = await userModel.getUserByName(userObj.login);
        if (!dbUser) {
            await userModel.addUser(user);
        }
    }
    await ctx.redirect('/');
});

sign.post('/logout', async (ctx) => {
    ctx.session.user = null;
    ctx.body = true;
});

module.exports = sign;