"use strict";
exports.__esModule = true;
exports.fireBaseDeviceKey = void 0;
var mongoose = require("mongoose");
var fireBaseDeviceKeySchema = new mongoose.Schema({
    deviceKey: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    }
});
var fireBaseDeviceKey = mongoose.model("fireBaseDeviceKey", fireBaseDeviceKeySchema);
exports.fireBaseDeviceKey = fireBaseDeviceKey;
