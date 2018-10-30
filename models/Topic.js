var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var TopicSchema = new Schema({

    topic: {
        type: String,
        required: true
    },
    article: [{
        type: Schema.Types.ObjectId,
        ref: "article"
    }]
});

var Topic = mongoose.model("Topic", TopicSchema);

module.exports = Topic;