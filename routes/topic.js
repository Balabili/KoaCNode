const router = require('koa-router'),
    userModel = require('../model/user.js'),
    topicModel = require('../model/topic.js');

let topic = new router();

topic.get('/', async (ctx) => {
    ctx.body = 'this is a users response!';
});

topic.get('/:id', async (ctx) => {
    let topicId = ctx.request.query.id, currentTopic = await topicModel.getTopicById(topicId);
    await ctx.render('topicDetails', { topicDetails: currentTopic });
});

topic.get('/create', async (ctx) => {
    await ctx.render('createTopic');
});

topic.post('/create', async (ctx) => {
    let topicData = {}, user = JSON.parse(ctx.session.user);
    topicData.topicUser = user.login;
    topicData.topicUserImg = user.avatar_url;
    topicData.board = +ctx.request.body.selectTab;
    topicData.title = ctx.request.body.topicTitle;
    topicData.content = ctx.request.body.createTopicText;
    topicData.lastModifiedTime = new Date().getTime();
    await topicModel.addTopic(topicData);
    ctx.redirect('/');
});

module.exports = topic;