"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Company = void 0;
const mongoose = require("mongoose");
const companySchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    name: {
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
const Company = mongoose.model("Company", companySchema);
exports.Company = Company;
//# sourceMappingURL=company.model.js.map