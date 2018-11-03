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
    credtotal: {
        type: Number,
        required: true
    },
    inttotal: {
        type: Number,
        required: true
    },
    acctotal: {
        type: Number,
        required: true
    },
    totalusers: {
        type: Number,
        required: true
    }
    
});

var Source = mongoose.model("Source", SourceSchema);

module.exports = Source;