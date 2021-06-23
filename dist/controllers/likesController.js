"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LikesController = void 0;
const like_model_1 = require("../models/like.model");
const apiResponses_1 = require("./utils/apiResponses");
const user_model_1 = require("../models/user.model");
class LikesController {
    static async saveLike(req, res, next) {
        try {
            const likesUserDTO = req.body;
            console.log(likesUserDTO.fromUserId);
            if (await user_model_1.User.findById(likesUserDTO.fromUserId)) {
                console.log(true);
            }
            const bothUsersExists = (await user_model_1.User.find().where('_id').in([likesUserDTO.fromUserId, likesUserDTO.toUserId]).exec()).length == 2;
            if (!bothUsersExists)
                return apiResponses_1.ApiResponse.sendErrorResponse(404, 'One of the users could not be found', res);
            const userDocument = new like_model_1.Like({
                fromUserId: likesUserDTO.fromUserId,
                toUserId: likesUserDTO.toUserId,
                hasLiked: likesUserDTO.hasLiked
            });
            await userDocument.save();
            return apiResponses_1.ApiResponse.sendSuccessResponse({
                message: 'Saved'
            }, res);
        }
        catch (ignored) {
            return apiResponses_1.ApiResponse.sendErrorResponse(500, 'Internal server error', res);
        }
    }
    static async getLikes(req, res, next) {
        try {
            const userId = req.params.userId;
            if (userId !== req.user._id) {
                return apiResponses_1.ApiResponse.sendErrorResponse(403, 'Not allowed', res);
            }
            const likesOfUser = await like_model_1.Like.find({
                toUserId: userId,
                hasLiked: true
            });
            return apiResponses_1.ApiResponse.sendSuccessResponse(likesOfUser, res);
        }
        catch (ignored) {
            return apiResponses_1.ApiResponse.sendErrorResponse(500, 'Internal server error', res);
        }
    }
    static async getLikesByUserId(userId, res, next) {
        try {
            const likesOfUser = await like_model_1.Like.find({
                fromUserId: userId,
                hasLiked: true
            });
            return likesOfUser;
        }
        catch (ignored) {
            return apiResponses_1.ApiResponse.sendErrorResponse(500, 'Internal server error', res);
        }
    }
    static async deleteLike(likeId) {
        await like_model_1.Like.deleteOne({ _id: likeId });
    }
}
exports.LikesController = LikesController;
//# sourceMappingURL=likesController.js.map