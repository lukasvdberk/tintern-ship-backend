import { Match } from "../models/match.model";
import { Like } from "../models/like.model";
import { User } from "../models/user.model"
import { LikesController } from "./likesController";
import { UserController } from "./userController"
import { ApiResponse } from "./utils/apiResponses"

export class MatchController {
  static async formMatch(req, res, next) {

    try {

      const userId = req.user._id;
  
      const likes = await LikesController.getLikesByUserId(userId, res, next);

      console.log(likes)

      console.log('---------------------------------');

      for(let i = 0; i <= likes.length; i++) {
        const likesFromLikedUser = await LikesController.getLikesByUserId(likes[i].toUserId, res, next);

        for(let x = 0; x <= likes.length; x++) {
          if(likesFromLikedUser[x].toUserId == userId) {
            
            console.log('Form match')
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
        toUserId: userId,   //not correct
        hasMatched: true
      })

      return ApiResponse.sendSuccessResponse(matchesOfUser, res)
    } catch (ignored) {
      return ApiResponse.sendErrorResponse(500, 'Internal server error', res)
    }
  }
} 