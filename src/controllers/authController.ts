import {ApiResponse} from "./utils/apiResponses";
import {MissingUserInformation} from "./excpetions/MissingUserInformation";

export class AuthController {
    static async register(req, res, next) {
        try {
            const user = this.extractUserInformationFromRequest(req, res);


        } catch (exception) {
            if (exception instanceof MissingUserInformation) {
                return ApiResponse.sendErrorResponse(404, exception.message, res)
            }
        }
    }

    static async login(req, res, next) {
        try {
            const user = this.extractUserInformationFromRequest(req, res);
        } catch (exception) {
            if (exception instanceof MissingUserInformation) {
                return ApiResponse.sendErrorResponse(404, exception.message, res)
            }
        }
    }

    private static extractUserInformationFromRequest(req, res): { email: string, password: string } {
        const email = req.body.email
        const password = req.body.password

        if(!email || !password) throw new MissingUserInformation('Missing password or username')
        return  {
            email,
            password
        }
    }

}
