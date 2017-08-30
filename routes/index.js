const Router = require('koa-router'),
  userModel = require('../model/user.js'),
  topicModel = require('../model/topic.js');

let index = new Router();

index.get('/', async (ctx) => {
  let user = null, isLogon = false, userInfo = null,
    topics = await topicModel.getAllTopics();
  if (ctx.session.user) {
    user = ctx.session.user;
    isLogon = true;
    userInfo = await userModel.getUserByName(JSON.parse(ctx.session.user).login);
  }
  await ctx.render('index', {
    userData: user, isLogon: isLogon, userInfo: userInfo, topics: topics
  });
});

module.exports = index;