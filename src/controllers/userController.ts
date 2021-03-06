import {ApiResponse} from "./utils/apiResponses";
import {User} from "../models/user.model";
import {Intern} from "../models/intern.model";
import {Company} from "../models/company.model";

export class UserController {
    /**
     * Gets the user information from who sended the request
     * @param req
     * @param res
     * @param next
     */
    static async getMe(req, res, next) {
        try {
            const isCompany = (await Company.find({
                userId: req.user._id
            })).length > 0

            const isIntern = (await Intern.find({
                userId: req.user._id
            })).length > 0


            const user = {
                id: req.user._id,
                email: req.user.email,
                avatarUrl: await UserController.getAvatarUrlFromUser(req.user._id as string),
                isIntern,
                isCompany
            }

            return ApiResponse.sendSuccessResponse(user, res)
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
            const userId: string = req.user._id

            // not the same user who wants to request
            if(userId !== req.user._id) {
                return ApiResponse.sendErrorResponse(403, 'Not allowed', res)
            }

            const imageFile = req.files.avatar

            if(!imageFile) return ApiResponse.sendErrorResponse(404, 'Na avatar image uploaded', res)

            const fileExtension: string = imageFile.name.split('.').pop();
            const avatarFileName: string = `./public/media/avatars/${userId}.${ fileExtension}`

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
            return ApiResponse.sendErrorResponse(500, 'Internal server error', res)
        }
    }

    static async getAvatarUrlFromUser(userId: string) {
        const userFromDb: any = await User.findOne({ _id: userId })

        const avatarUrl = userFromDb.avatarUrl ? userFromDb.avatarUrl.replace("public/", "")
            : "https://file.coffee/u/1woImEMROR3EAC.png"

        return avatarUrl
    }
}
