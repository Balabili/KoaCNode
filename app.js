const koa = require('koa'),
  app = new koa(),
  json = require('koa-json'),
  views = require('koa-views'),
  onerror = require('koa-onerror'),
  koaStatic = require('koa-static'),
  session = require('koa-session2'),
  store = require('./store.js'),

  router = require('./routes/router.js');

// error handler
onerror(app);

// global middlewares
app.use(views(__dirname + '/views', { extension: 'ejs' }));
app.use(session({
  key: 'xxxxxxxxxxxxxxxxxxxxxxxx',
  store: new store(),
  maxAge: 1000 * 60 * 60 * 24 * 15
}));
app.use(require('koa-bodyparser')());
app.use(json());

app.use(koaStatic(__dirname + '/public'));
app.use(koaStatic(__dirname + '/bin'));

// routes definition
app.use(router.routes()).use(router.allowedMethods());

app.listen(8090);