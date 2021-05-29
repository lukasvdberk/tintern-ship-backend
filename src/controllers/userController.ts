import {ApiResponse} from "./utils/apiResponses";
import {User} from "../models/user.model";

export class UserController {
    /**
     * Gets the user information from who sended the request
     * @param req
     * @param res
     * @param next
     */
    static async getMe(req, res, next) {
        try {
            return ApiResponse.sendSuccessResponse(req.user, res)
        } catch (ignored) {
            return ApiResponse.sendErrorResponse(500, 'Internal server error', res)
        }
    }

    /**
     * Saves the user his icon.
     * @param req
     * @param res
     * @param next
     */
    static async saveAvatar(req, res, next) {
        try {
            const userId: string = req.params.userId

            // not the same user who wants to request
            if(userId !== req.user._id) {
                return ApiResponse.sendErrorResponse(403, 'Not allowed', res)
            }

            const imageFile = req.files.avatar

            if(!imageFile) return ApiResponse.sendErrorResponse(404, 'Na avatar image uploaded', res)

            const fileExtension: string = imageFile.name.split('.').pop();
            const avatarFileName: string = `./media/avatars/${userId}.${ fileExtension}`

            // moves file and saves in directory
            await imageFile.mv(avatarFileName);

            const userFilter = {
                email: req.user.email
            }

            const updateStatement = {
                // else you get the ./ in the database
                avatarUrl: avatarFileName.substring(2)
            }

            await User.findOneAndUpdate(userFilter, updateStatement, {});

            return ApiResponse.sendSuccessResponse({
                message: 'saved'
            }, res)
        } catch (ignored) {
            console.log(ignored)
            return ApiResponse.sendErrorResponse(500, 'Internal server error', res)
        }
    }
}
