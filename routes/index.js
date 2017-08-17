const Router = require('koa-router');

let index = new Router();

index.get('/', async (ctx) => {
  await ctx.render('index', {
    title: 'Hello World Koa!'
  });
});

module.exports = index;