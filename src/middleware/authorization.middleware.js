"use strict";
exports.__esModule = true;
exports.AuthorizationMiddleware = void 0;
var authorizationUtil_1 = require("../controllers/utils/authorizationUtil");
var apiResponses_1 = require("../controllers/utils/apiResponses");
var userDTO_1 = require("../dto/user/userDTO");
var AuthorizationMiddleware = /** @class */ (function () {
    function AuthorizationMiddleware() {
    }
    AuthorizationMiddleware.isAuthenticated = function (req, res, next) {
        try {
            // assumes token pattern in: Bearer yourtoken
            var jwtToken = req.header('Authorization').split(" ")[1];
            var jwtPayload = authorizationUtil_1.AuthorizationUtil.extractJWTInformation(jwtToken);
            if (jwtPayload !== undefined) {
                req.user = new userDTO_1.UserDTO(jwtPayload.userId, jwtPayload.email);
                return next();
            }
        }
        catch (ignored) { }
        return apiResponses_1.ApiResponse.sendErrorResponse(401, 'Not authenticated', res);
    };
    return AuthorizationMiddleware;
}());
exports.AuthorizationMiddleware = AuthorizationMiddleware;
