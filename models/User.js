const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        trim: true,
        required:true,
    },
    password: {
        type: String,
        validate: [
            function (input) {
                return input.length >= 6;
            },
            // Error Message
            'Password should be longer minimum 6.'
        ]
    },
    email: {
        type: String,
        match: [/.+@.+\..+/, 'Please enter a valid e-mail address']
    },
    active: {
        type: Boolean,
        default: false
    },
    userCreated: {
        type: Date,
        default: Date.now
    }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
