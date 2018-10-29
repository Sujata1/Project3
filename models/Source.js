var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var SourceSchema = new Schema({

    sourceid: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    language: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    article: [{
        type: Schema.Types.ObjectId,
        ref: "article"
    }]
});

var Source = mongoose.model("Source", SourceSchema);

module.exports = Source;