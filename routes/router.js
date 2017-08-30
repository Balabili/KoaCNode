const Router = require('koa-router'),
    index = require('./index'),
    sign = require('./sign'),
    topic = require('./topic'),
    user = require('./users');

let router = new Router();
router.use('/', index.routes(), index.allowedMethods());
router.use('/sign', sign.routes(), sign.allowedMethods());
router.use('/user', user.routes(), user.allowedMethods());
router.use('/topic', topic.routes(), topic.allowedMethods());

module.exports = router;