"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const apiResponses_1 = require("./utils/apiResponses");
const user_model_1 = require("../models/user.model");
class UserController {
    static async getMe(req, res, next) {
        try {
            const user = {
                id: req.user._id,
                email: req.user.email
            };
            return apiResponses_1.ApiResponse.sendSuccessResponse(user, res);
        }
        catch (ignored) {
            return apiResponses_1.ApiResponse.sendErrorResponse(500, 'Internal server error', res);
        }
    }
    static async saveAvatar(req, res, next) {
        try {
            const userId = req.user._id;
            if (userId !== req.user._id) {
                return apiResponses_1.ApiResponse.sendErrorResponse(403, 'Not allowed', res);
            }
            const imageFile = req.files.avatar;
            if (!imageFile)
                return apiResponses_1.ApiResponse.sendErrorResponse(404, 'Na avatar image uploaded', res);
            const fileExtension = imageFile.name.split('.').pop();
            const avatarFileName = `./public/media/avatars/${userId}.${fileExtension}`;
            await imageFile.mv(avatarFileName);
            const userFilter = {
                email: req.user.email
            };
            const updateStatement = {
                avatarUrl: avatarFileName.substring(2)
            };
            await user_model_1.User.findOneAndUpdate(userFilter, updateStatement, {});
            return apiResponses_1.ApiResponse.sendSuccessResponse({
                message: 'saved'
            }, res);
        }
        catch (ignored) {
            return apiResponses_1.ApiResponse.sendErrorResponse(500, 'Internal server error', res);
        }
    }
}
exports.UserController = UserController;
//# sourceMappingURL=userController.js.map