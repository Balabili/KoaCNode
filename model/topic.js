const mongoose = require('./mongo.js'),
    logger = require('../logger/logger.js'),
    Schema = mongoose.Schema;

let CommentSchema = new Schema({
    commentUser: { type: String, required: true },
    content: { type: String, required: true }
}),
    TopicSchema = new Schema({
        topicUser: { type: String, required: true },
        topicUserImg: { type: String, required: true },
        title: { type: String, required: true },
        board: { type: Number, required: true },
        content: { type: String, required: true },
        lastModifiedTime: { type: Number, required: true },
        clickCount: { type: Number, default: 0 },
        comments: [CommentSchema]
    }),

    Topic = mongoose.model('Topic', TopicSchema);

function addTopic(topic) {
    let topicData = new Topic(topic);
    topicData.save((err) => {
        if (err) {
            logger.error(`Add Topic when add topic. Error: ${err}`);
        } else {
            logger.info(`Add Topic successful.Topic name: ${topic.title}`);
        }
    });
}

function getAllTopics() {
    return Topic.find({}, (err) => {
        if (err) {
            logger.error(`Find all topic error: ${err}`);
        } else {
            logger.info('Find all topic successful.');
        }
    });
}

function getTopicById(id) {
    return Topic.findOne({ _id: id }, (err) => {
        if (err) {
            logger.error(`Get topic by id error: ${err}`);
        } else {
            logger.info(`Find topic ${id} successful.`);
        }
    });
}

module.exports = {
    TopicSchema: TopicSchema,
    addTopic: addTopic,
    getAllTopics: getAllTopics,
    getTopicById: getTopicById
};