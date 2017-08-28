const mongoose = require('./mongo.js'),
    logger = require('../logger/logger.js'),
    Schema = mongoose.Schema;

let CommentSchema = new Schema({
    content: { type: String, required: true }
}),
    TopicSchema = new Schema({
        topicUser: { type: String, required: true },
        title: { type: String, required: true },
        content: { type: String, required: true },
        comments: [CommentSchema]
    }),
    UserSchema = new Schema({
        name: { type: String, required: true },
        // password: { type: String, required: true },
        email: { type: String, required: true },
        personalSite: { type: String },
        personalPosition: { type: String },
        personalWeibo: { type: String },
        personalSign: { type: String },
        score: { type: Number, default: 0 },
        topic: [TopicSchema]
    }),
    User = mongoose.model('User', UserSchema);

function AddUser(data) {
    let user = new User({
        name: data.name,
        email: data.email
    });
    user.save((err, res) => {
        if (err) {
            logger.error(err);
        } else {
            logger.info(`add user ${data.name} successful`);
        }
    });
}