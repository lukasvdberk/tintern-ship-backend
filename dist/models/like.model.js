"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Like = void 0;
const mongoose = require("mongoose");
const likeSchema = new mongoose.Schema({
    fromUserId: {
        type: String,
        required: true,
    },
    toUserId: {
        type: String,
        required: true,
    },
    hasLiked: {
        type: Boolean,
        required: true,
    },
});
const Like = mongoose.model("Like", likeSchema);
exports.Like = Like;
//# sourceMappingURL=like.model.js.map