"use strict";
exports.__esModule = true;
exports.User = void 0;
var mongoose = require("mongoose");
var userSchema = new mongoose.Schema({
    matches: [
        {
            type: Object,
            require: true,
            unique: false
        },
    ],
    likes: [
        {
            type: Object,
            require: true,
            unique: false
        },
    ],
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    avatarUrl: {
        type: String,
        required: false
    }
});
var User = mongoose.model("User", userSchema);
exports.User = User;
