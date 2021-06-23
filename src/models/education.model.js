"use strict";
exports.__esModule = true;
exports.Education = void 0;
var mongoose = require("mongoose");
var educationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});
var Education = mongoose.model("Education", educationSchema);
exports.Education = Education;
