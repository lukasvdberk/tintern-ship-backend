import {AuthorizationUtil} from "../controllers/utils/authorizationUtil";
import {ApiResponse} from "../controllers/utils/apiResponses";
import {UserDTO} from "../dto/user/userDTO";

export class AuthorizationMiddleware {
    static isAuthenticated (req, res, next) {
        try {
            // assumes token pattern in: Bearer yourtoken
            const jwtToken = req.header('Authorization').split(" ")[1]

            const jwtPayload = AuthorizationUtil.extractJWTInformation(jwtToken)

            if (jwtPayload !== undefined) {
                req.user = new UserDTO(jwtPayload.userId, jwtPayload.email)
                return next()
            }
        } catch (ignored) {}
        return ApiResponse.sendErrorResponse(401, 'Not authenticated', res)
    }
}
