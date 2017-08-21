const Router = require('koa-router');

let index = new Router();

index.get('/', async (ctx) => {
  await ctx.render('index', {
    title: 'Hello World Koa!'
  });
});

index.get('/testSession', async (ctx) => {
  ctx.session.user = '22222';
  ctx.body = 222;
});

module.exports = index;