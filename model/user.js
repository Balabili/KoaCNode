const mongoose = require('./mongo.js'),
    logger = require('../logger/logger.js'),
    Schema = mongoose.Schema;

let UserSchema = new Schema({
    name: { type: String, required: true },
    // password: { type: String, required: true },
    image: { type: String },
    email: { type: String, required: true },
    personalSite: { type: String },
    personalPosition: { type: String },
    personalWeibo: { type: String },
    personalSign: { type: String },
    score: { type: Number, default: 0 }
}),
    User = mongoose.model('User', UserSchema);

function addUser(data) {
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

function getUserByName(name) {
    return User.findOne({ name: name }, (err) => {
        if (err) {
            logger.error(`getUserByName error:${err}`);
        } else {
            logger.info(`getUserByName successgul.Username: ${name}`);
        }
    });
}

module.exports = {
    addUser: addUser,
    getUserByName: getUserByName
};