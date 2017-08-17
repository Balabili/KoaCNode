const Router = require('koa-router'),
    index = require('./index'),
    user = require('./users');

let router = new Router();
router.use('/', index.routes(), index.allowedMethods());
router.use('/user', user.routes(), user.allowedMethods());

module.exports = router;