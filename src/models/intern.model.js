"use strict";
exports.__esModule = true;
exports.Intern = void 0;
var mongoose = require("mongoose");
var internSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    educationId: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    }
});
var Intern = mongoose.model("Intern", internSchema);
exports.Intern = Intern;
