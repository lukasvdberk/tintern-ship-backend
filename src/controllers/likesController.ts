import {CreateLikesDTO} from "../dto/likes/createLikeDTO";
import {Like} from "../models/like.model";
import {PasswordUtil} from "./utils/passwordUtil";
import {ApiResponse} from "./utils/apiResponses";
import {User} from "../models/user.model";

export class LikesController {
    /**
     * Save a like for a user to another user.
     * @param req
     * @param res
     * @param next
     */
    static async saveLike(req, res, next) {
        try {
            const likesUserDTO: CreateLikesDTO = req.body as CreateLikesDTO

            const bothUsersExists = (await User.find().where('_id').in([likesUserDTO.fromUser, likesUserDTO.toUser]).exec()).length == 2;

            if(!bothUsersExists) return ApiResponse.sendErrorResponse(404, 'One of the users could not be found', res)

            const userDocument = new Like({
                fromUserId: likesUserDTO.fromUser,
                toUserId: likesUserDTO.fromUser,
                hasLiked: likesUserDTO.hasLiked
            });
            await userDocument.save();

            return ApiResponse.sendSuccessResponse({
                message:'Saved'
            }, res)
        } catch (ignored) {
            return ApiResponse.sendErrorResponse(500, 'Internal server error', res)
        }
    }
}
