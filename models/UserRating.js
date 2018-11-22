const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserRatingSchema = new Schema({
    useremail: {
        type: String,
        match: [/.+@.+\..+/, 'Please enter a valid e-mail address']
    },
    articleurl: {
        type: String,
        required: true
      }
});

const UserRating = mongoose.model('UserRating', UserRatingSchema);

module.exports = UserRating;
