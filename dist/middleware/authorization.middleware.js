"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorizationMiddleware = void 0;
const authorizationUtil_1 = require("../controllers/utils/authorizationUtil");
const apiResponses_1 = require("../controllers/utils/apiResponses");
const userDTO_1 = require("../dto/user/userDTO");
class AuthorizationMiddleware {
    static isAuthenticated(req, res, next) {
        try {
            const jwtToken = req.header('Authorization').split(" ")[1];
            const jwtPayload = authorizationUtil_1.AuthorizationUtil.extractJWTInformation(jwtToken);
            if (jwtPayload !== undefined) {
                req.user = new userDTO_1.UserDTO(jwtPayload.userId, jwtPayload.email);
                return next();
            }
        }
        catch (ignored) { }
        return apiResponses_1.ApiResponse.sendErrorResponse(401, 'Not authenticated', res);
    }
}
exports.AuthorizationMiddleware = AuthorizationMiddleware;
//# sourceMappingURL=authorization.middleware.js.map