var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var TopicSchema = new Schema({

    topic: {
        type: String,
        required: true
    }
});

var Topic = mongoose.model("Topic", TopicSchema);

module.exports = Topic;