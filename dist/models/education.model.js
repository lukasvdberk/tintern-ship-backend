"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Education = void 0;
const mongoose = require("mongoose");
const educationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
});
const Education = mongoose.model("Education", educationSchema);
exports.Education = Education;
//# sourceMappingURL=education.model.js.map