"use strict";
exports.__esModule = true;
exports.Company = void 0;
var mongoose = require("mongoose");
var companySchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    name: {
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
var Company = mongoose.model("Company", companySchema);
exports.Company = Company;
