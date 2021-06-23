"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const apiResponses_1 = require("./utils/apiResponses");
const user_model_1 = require("../models/user.model");
const passwordUtil_1 = require("./utils/passwordUtil");
const authorizationUtil_1 = require("./utils/authorizationUtil");
class AuthController {
    static async register(req, res, next) {
        const user = req.body;
        const existingUser = await user_model_1.User.findOne({
            email: user.email,
        });
        if (existingUser) {
            return apiResponses_1.ApiResponse.sendErrorResponse(403, "User already exists", res);
        }
        const userDocument = new user_model_1.User({
            email: user.email,
            password: await passwordUtil_1.PasswordUtil.hashPassword(user.password),
        });
        await userDocument.save();
        const jwtToken = await authorizationUtil_1.AuthorizationUtil.createJWT(userDocument._id, user.email);
        return apiResponses_1.ApiResponse.sendSuccessResponse({
            token: jwtToken,
        }, res);
    }
    static async login(req, res, next) {
        const user = req.body;
        const existingUser = await user_model_1.User.findOne({
            email: user.email,
        });
        if (existingUser) {
            if (await passwordUtil_1.PasswordUtil.validPassword(user.password, existingUser.password)) {
                const jwtToken = await authorizationUtil_1.AuthorizationUtil.createJWT(existingUser._id, user.email);
                return apiResponses_1.ApiResponse.sendSuccessResponse({
                    token: jwtToken,
                }, res);
            }
        }
        return apiResponses_1.ApiResponse.sendErrorResponse(404, "No valid credentials given for user", res);
    }
}
exports.AuthController = AuthController;
//# sourceMappingURL=authController.js.map