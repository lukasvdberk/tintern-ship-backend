"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FirebaseNotificationService = void 0;
const admin = require("firebase-admin");
const firebaseDeviceKey_model_1 = require("../models/firebaseDeviceKey.model");
admin.initializeApp();
class FirebaseNotificationService {
    static async sendNotifications(dataToSend, userIds) {
        const firebaseDeviceKeys = await firebaseDeviceKey_model_1.fireBaseDeviceKey.where('userId').in(userIds).exec();
        try {
            const message = {
                notification: {
                    title: dataToSend.title,
                    body: dataToSend.message,
                },
                data: dataToSend.data,
                tokens: firebaseDeviceKeys.map((device) => device.deviceKey)
            };
            await admin.messaging().sendMulticast(message);
        }
        catch (ignored) {
            return;
        }
    }
}
exports.FirebaseNotificationService = FirebaseNotificationService;
//# sourceMappingURL=firebaseNotificationService.js.map