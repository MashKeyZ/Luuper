const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var UserSchema = new Schema({
    admin:   {
        type: Boolean,
        default: false
    },username: {
        type: String,
        required: true,
        unique: true
    },
    password:  {
        type: String,
        required: true
    },
});

User.plugin(passportLocalMongoose);
var User = mongoose.model('User', UserSchema);

module.exports = User;