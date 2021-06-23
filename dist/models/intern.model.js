"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Intern = void 0;
const mongoose = require("mongoose");
const internSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    educationId: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    age: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
});
const Intern = mongoose.model("Intern", internSchema);
exports.Intern = Intern;
//# sourceMappingURL=intern.model.js.map