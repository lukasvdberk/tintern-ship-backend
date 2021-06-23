"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorizationUtil = void 0;
const jwt = require("jsonwebtoken");
class AuthorizationUtil {
    static getJWTKey() {
        return process.env.JWT_SECRET_KEY;
    }
    static async createJWT(userId, email) {
        return await jwt.sign({
            userId: userId,
            email: email,
        }, this.getJWTKey(), {
            algorithm: "HS256",
        });
    }
    static extractJWTInformation(jwtToken) {
        try {
            const payload = jwt.verify(jwtToken, this.getJWTKey(), {
                algorithm: "HS256",
            });
            return {
                email: payload.email,
                userId: payload.userId,
            };
        }
        catch (exception) {
            return undefined;
        }
    }
}
exports.AuthorizationUtil = AuthorizationUtil;
//# sourceMappingURL=authorizationUtil.js.map