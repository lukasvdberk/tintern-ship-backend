import { Match } from "../models/match.model";
import { Like } from "../models/like.model";
import { User } from "../models/user.model"
import { LikesController } from "./likesController";
import { UserController } from "./userController"
import { ApiResponse } from "./utils/apiResponses"

export class MatchController {
  static async checkIfMatchIsAvailable(req, res, next) {
    
    try {

      const userId = req.user._id;

      const likes = await LikesController.getLikesByUserId(userId, res, next);

      for(let i = 0; i <= likes.length; i++) {
        const likesFromSecondUser = await LikesController.getLikesByUserId(likes[i].toUserId, res, next);

        if(likesFromSecondUser[0] == undefined) {
          return ApiResponse.sendSuccessResponse(
            false, res)
        } 
        
        else {

          for(let x = 0; x <= likesFromSecondUser.length; x++) {
            const secondUserLike = likesFromSecondUser[x]
  
            if(secondUserLike.toUserId == userId) {
              return ApiResponse.sendSuccessResponse(
                true, res)
            }
          }
        }
      }
    } catch (ignored) {
      return ApiResponse.sendSuccessResponse(false, res)
    }
  }

  static async formMatch(req, res, next) {

    try {

      const userId = req.user._id;
  
      const likes = await LikesController.getLikesByUserId(userId, res, next);

      for(let i = 0; i <= likes.length; i++) {
        const likesFromLikedUser = await LikesController.getLikesByUserId(likes[i].toUserId, res, next);
      
        for(let x = 0; x <= likes.length; x++) {
          const secondUserLike = likesFromLikedUser[x]

          if(secondUserLike.toUserId == userId) {

            const userDocument = new Match ({
              firstUserId: userId,
              secondUserId: secondUserLike.fromUserId
            });

            await userDocument.save();

            await LikesController.deleteLike(likes[0]._id)
            await LikesController.deleteLike(likesFromLikedUser[0]._id)

            return ApiResponse.sendSuccessResponse({
              message: 'Created match'
            }, res)
          }
        }
      }
    } catch (ignored) {
        return ApiResponse.sendErrorResponse(500, 'Internal server error', res)
      }
    }

  static async getMatches(req, res, next) {
    try {
      const userId: string = req.params.userId
      
      const matchesOfUser = await Match.find({ 
        $or: [{firstUserId: userId}, {secondUserId: userId}]
      })

      return ApiResponse.sendSuccessResponse(matchesOfUser, res)
    } catch (ignored) {
      return ApiResponse.sendErrorResponse(500, 'Internal server error', res)
    }
  }
} 