const Router = require('koa-router');

let index = new Router();

index.get('/', async (ctx) => {
  let user = null, isLogon = false;
  if (ctx.session.user) {
    user = ctx.session.user;
    isLogon = true;
  }
  await ctx.render('index', {
    userData: user, isLogon: isLogon
  });
});

module.exports = index;