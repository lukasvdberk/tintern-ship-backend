"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    matches: [
        {
            type: Object,
            require: true,
            unique: false,
        },
    ],
    likes: [
        {
            type: Object,
            require: true,
            unique: false,
        },
    ],
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    avatarUrl: {
        type: String,
        required: false,
    },
});
const User = mongoose.model("User", userSchema);
exports.User = User;
//# sourceMappingURL=user.model.js.map