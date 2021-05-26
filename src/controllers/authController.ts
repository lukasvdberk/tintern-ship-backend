import {ApiResponse} from "./utils/apiResponses";
import {MissingUserInformation} from "./excpetions/MissingUserInformation";
import {User} from "../models/user.model";
import {PasswordUtil} from "./utils/passwordUtil";
import {AuthorizationUtil} from "./utils/authorizationUtil";

interface User {
    email: string
    password: string
}

export class AuthController {
    static async register(req, res, next) {
        try {
            // TODO add jsdoc
            // TODO add swagger doc
            const user = AuthController.extractUserInformationFromRequest(req, res);
            const existingUser = await User.findOne({
                email: user.email
            })

            if(existingUser) {
                return ApiResponse.sendErrorResponse(403, 'User already exists', res)
            }

            const userDocument = new User({
                email: user.email,
                password: await PasswordUtil.hashPassword(user.password),
            })
            await userDocument.save()

            // for authentication
            const jwtToken = await AuthorizationUtil.createJWT(userDocument._id, user.email)

            return ApiResponse.sendSuccessResponse({
                token: jwtToken
            }, res)
        } catch (exception) {
            if (exception instanceof MissingUserInformation) {
                return ApiResponse.sendErrorResponse(404, exception.message, res)
            }
            return ApiResponse.sendErrorResponse(500, 'An error occurred on the server.', res)
        }
    }

    static async login(req, res, next) {
        try {
            const user = AuthController.extractUserInformationFromRequest(req, res);

            // TODO parse to right model or something.
            const existingUser = (await User.findOne({
                email: user.email
            }))

            if(existingUser) {
                // validate password
                // @ts-ignore
                if(await PasswordUtil.validPassword(user.password, existingUser.password)) {
                    const jwtToken = await AuthorizationUtil.createJWT(existingUser._id, user.email)
                    return ApiResponse.sendSuccessResponse({
                        token: jwtToken
                    }, res)
                }
            }
            return ApiResponse.sendErrorResponse(404, 'No valid credentials given for user', res)
        } catch (exception) {
            if (exception instanceof MissingUserInformation) {
                return ApiResponse.sendErrorResponse(404, exception.message, res)
            }

            return ApiResponse.sendErrorResponse(500, 'An error occurred on the server.', res)
        }
    }

    private static extractUserInformationFromRequest(req, res): User {
        // TODO check valid email and password requirements
        const email: string = req.body.email
        const password: string = req.body.password

        if(!email || !password) throw new MissingUserInformation('Missing password or username')
        return  {
            email,
            password
        }
    }

}
