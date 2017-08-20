const koa = require('koa'),
  app = new koa(),
  json = require('koa-json'),
  views = require('koa-views'),
  onerror = require('koa-onerror'),
  koaStatic = require('koa-static'),

  router = require('./routes/router.js');

// error handler
onerror(app);

// global middlewares
app.use(views(__dirname + '/views', { extension: 'ejs' }));
app.use(require('koa-bodyparser')());
app.use(json());

app.use(koaStatic(__dirname + '/public'));
app.use(koaStatic(__dirname + '/bin'));

// routes definition
app.use(router.routes()).use(router.allowedMethods());

app.listen(8090);