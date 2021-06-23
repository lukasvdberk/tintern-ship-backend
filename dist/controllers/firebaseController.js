"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FirebaseController = void 0;
const firebaseDeviceKey_model_1 = require("../models/firebaseDeviceKey.model");
const apiResponses_1 = require("./utils/apiResponses");
class FirebaseController {
    static async saveUserToken(req, res, next) {
        const firebaseDevice = req.body;
        const firebaseDeviceToken = new firebaseDeviceKey_model_1.fireBaseDeviceKey({
            userId: req.user._id,
            deviceKey: firebaseDevice.token,
        });
        await firebaseDeviceToken.save();
        return apiResponses_1.ApiResponse.sendSuccessResponse(firebaseDeviceToken, res);
    }
}
exports.FirebaseController = FirebaseController;
//# sourceMappingURL=firebaseController.js.map