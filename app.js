const koa = require('koa'),
  app = new koa(),
  json = require('koa-json'),
  views = require('koa-views'),
  onerror = require('koa-onerror'),
  koaStatic = require('koa-static'),
  session = require('koa-session2'),
  mongoose = require('./model/mongo.js'),
  MongoStore = require('connect-mongo')(session),

  router = require('./routes/router.js');

// error handler
onerror(app);

// global middlewares
app.use(views(__dirname + '/views', { extension: 'ejs' }));
app.use(session({
  secret: 'iufahdiuwaiudyawydiua',
  cookie: { 'maxAge': 60 * 1000 * 60 * 24 * 14 },
  resave: true,
  saveUninitialized: true,
  Store: new MongoStore({
    mongooseConnection: mongoose.connection
  })
}));
app.use(require('koa-bodyparser')());
app.use(json());

app.use(koaStatic(__dirname + '/public'));
app.use(koaStatic(__dirname + '/bin'));

// routes definition
app.use(router.routes()).use(router.allowedMethods());

app.listen(8090);