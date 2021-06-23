"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fireBaseDeviceKey = void 0;
const mongoose = require("mongoose");
const fireBaseDeviceKeySchema = new mongoose.Schema({
    deviceKey: {
        type: String,
        required: true,
    },
    userId: {
        type: String,
        required: true,
    },
});
const fireBaseDeviceKey = mongoose.model("fireBaseDeviceKey", fireBaseDeviceKeySchema);
exports.fireBaseDeviceKey = fireBaseDeviceKey;
//# sourceMappingURL=firebaseDeviceKey.model.js.map