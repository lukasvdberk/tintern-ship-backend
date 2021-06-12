import {FirebaseDeviceDTO} from "../dto/firebase/firebaseDeviceDTO";
import {fireBaseDeviceKey} from "../models/firebaseDeviceKey.model";
import {ApiResponse} from "./utils/apiResponses";
import {FirebaseNotificationService} from "../services/firebaseNotificationService";

export class FirebaseController {
    static async saveUserToken(req, res, next) {
        const firebaseDevice: FirebaseDeviceDTO = req.body as FirebaseDeviceDTO;

        const firebaseDeviceToken = new fireBaseDeviceKey({
            userId: req.user._id,
            deviceKey: firebaseDevice.token,
        })
        await firebaseDeviceToken.save()

        return ApiResponse.sendSuccessResponse(firebaseDeviceToken, res)
    }
}
