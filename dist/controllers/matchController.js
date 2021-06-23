"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchController = void 0;
const match_model_1 = require("../models/match.model");
const likesController_1 = require("./likesController");
const apiResponses_1 = require("./utils/apiResponses");
class MatchController {
    static async formMatch(req, res, next) {
        try {
            const userId = req.user._id;
            const likes = await likesController_1.LikesController.getLikesByUserId(userId, res, next);
            for (let i = 0; i <= likes.length; i++) {
                const likesFromLikedUser = await likesController_1.LikesController.getLikesByUserId(likes[i].toUserId, res, next);
                for (let x = 0; x <= likes.length; x++) {
                    const secondUserLike = likesFromLikedUser[x];
                    if (secondUserLike.toUserId == userId) {
                        const userDocument = new match_model_1.Match({
                            firstUserId: userId,
                            secondUserId: secondUserLike.fromUserId
                        });
                        await userDocument.save();
                        await likesController_1.LikesController.deleteLike(likes[0]._id);
                        await likesController_1.LikesController.deleteLike(likesFromLikedUser[0]._id);
                        return apiResponses_1.ApiResponse.sendSuccessResponse({
                            message: 'Created match'
                        }, res);
                    }
                }
            }
        }
        catch (ignored) {
            return apiResponses_1.ApiResponse.sendErrorResponse(500, 'Internal server error', res);
        }
    }
    static async getMatches(req, res, next) {
        try {
            const userId = req.params.userId;
            const matchesOfUser = await match_model_1.Match.find({
                $or: [{ firstUserId: userId }, { secondUserId: userId }]
            });
            return apiResponses_1.ApiResponse.sendSuccessResponse(matchesOfUser, res);
        }
        catch (ignored) {
            return apiResponses_1.ApiResponse.sendErrorResponse(500, 'Internal server error', res);
        }
    }
}
exports.MatchController = MatchController;
//# sourceMappingURL=matchController.js.map