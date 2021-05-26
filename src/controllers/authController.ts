import {ApiResponse} from "./utils/apiResponses";

export class AuthController {
    static async register(req, res, next) {
        const email = req.body.email
        const password = req.body.password

        if (!email || !password) {
            return ApiResponse.errorResponse(400, 'Username or password not supplied', res)
        }
        
    }
}
