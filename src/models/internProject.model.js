"use strict";
exports.__esModule = true;
exports.InternProject = void 0;
var mongoose = require("mongoose");
var internProjectSchema = new mongoose.Schema({
    educationId: {
        type: String,
        required: true
    },
    companyId: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});
var InternProject = mongoose.model("InternProject", internProjectSchema);
exports.InternProject = InternProject;
