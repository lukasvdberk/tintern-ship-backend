import * as admin from 'firebase-admin';
import {fireBaseDeviceKey} from "../models/firebaseDeviceKey.model";

admin.initializeApp();

interface NotificationData {
    title: string
    message: string
    data: any
}

export class FirebaseNotificationService {
    /**
     * Pushes notifications to users their devices.
     * Make sure the devices are regristered in the database
     * @param dataToSend - What you want to send to the devices.
     * @param userIds - The ids of the user that you want the messages to send to (coming from your database)
     */
    static async sendNotifications(dataToSend: NotificationData, userIds: string[]) {
        const firebaseDeviceKeys = await fireBaseDeviceKey.where('userId').in(userIds).exec();

        try {
            const message = {
                notification: {
                    title: dataToSend.title,
                    body:  dataToSend.message,
                },
                data: dataToSend.data,
                tokens: firebaseDeviceKeys.map((device) => (device as any).deviceKey)
            };

            await admin.messaging().sendMulticast(message)
        } catch (ignored) {
            return
        }
    }
}
