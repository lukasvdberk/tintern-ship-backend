import {CreateLikesDTO} from "../dto/likes/createLikeDTO";
import {Like} from "../models/like.model";
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
                toUserId: likesUserDTO.toUser,
                hasLiked: likesUserDTO.hasLiked
            });

            await userDocument.save();

            return ApiResponse.sendSuccessResponse({
                message: 'Saved'
            }, res)
        } catch (ignored) {
            return ApiResponse.sendErrorResponse(500, 'Internal server error', res)
        }
    }

    static async getLikes(req, res, next) {
        try {
            const userId: string = req.params.userId

            // not the same user who wants to request
            if(userId !== req.user._id) {
                return ApiResponse.sendErrorResponse(403, 'Not allowed', res)
            }

            const likesOfUser = await Like.find({
                toUserId: userId,
                hasLiked: true
            })

            return ApiResponse.sendSuccessResponse(likesOfUser, res)
        } catch (ignored) {
            return ApiResponse.sendErrorResponse(500, 'Internal server error', res)
        }
    }

    static async getLikesByUserId(userId, res, next) {
        console.log(userId)
        try {
            const likesOfUser = await Like.find({
                fromUserId: userId,
                hasLiked: true
            })
            return likesOfUser
            return ApiResponse.sendSuccessResponse(likesOfUser, res)
        } catch (ignored) {
            return ApiResponse.sendErrorResponse(500, 'Internal server error', res)
        }
    }

    static async deleteLike(likeId, res) {
        await Like.deleteOne({_id: likeId})
        
        return ApiResponse.sendSuccessResponse(likeId, res)
    } 
}
