"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InternProject = void 0;
const mongoose = require("mongoose");
const internProjectSchema = new mongoose.Schema({
    educationId: {
        type: String,
        required: true,
    },
    companyId: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
});
const InternProject = mongoose.model("InternProject", internProjectSchema);
exports.InternProject = InternProject;
//# sourceMappingURL=internProject.model.js.map