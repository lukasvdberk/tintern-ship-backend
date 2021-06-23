"use strict";
exports.__esModule = true;
exports.Like = void 0;
var mongoose = require("mongoose");
var likeSchema = new mongoose.Schema({
    fromUserId: {
        type: String,
        required: true
    },
    toUserId: {
        type: String,
        required: true
    },
    hasLiked: {
        type: Boolean,
        required: true
    }
});
var Like = mongoose.model("Like", likeSchema);
exports.Like = Like;
