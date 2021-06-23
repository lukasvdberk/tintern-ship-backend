interface NotificationData {
    title: string;
    message: string;
    data: any;
}
export declare class FirebaseNotificationService {
    static sendNotifications(dataToSend: NotificationData, userIds: string[]): Promise<void>;
}
export {};
