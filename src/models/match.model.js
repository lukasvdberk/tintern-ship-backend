"use strict";
exports.__esModule = true;
exports.Match = void 0;
var mongoose = require("mongoose");
var matchSchema = new mongoose.Schema({
    firstUserId: {
        type: String,
        required: true
    },
    secondUserId: {
        type: String,
        required: true
    }
});
var Match = mongoose.model("Match", matchSchema);
exports.Match = Match;
