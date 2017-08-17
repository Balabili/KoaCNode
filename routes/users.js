const router = require('koa-router');

let user = new router();

user.get('/', async (ctx) => {
  ctx.body = 'this is a users response!';
});

user.get('/bar', async (ctx) => {
  ctx.body = 'this is a users/bar response!';
});

module.exports = user;
