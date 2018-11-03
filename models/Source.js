var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var SourceSchema = new Schema({

    name: {
        type: String,
        required: true
    },
    credibility: {
        type: Number,
        required: true
    },
    integrity: {
        type: Number,
        required: true
    },
    accountability: {
        type: Number,
        required: true
    }
    
});

var Source = mongoose.model("Source", SourceSchema);

module.exports = Source;