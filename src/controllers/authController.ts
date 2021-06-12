import { ApiResponse } from "./utils/apiResponses";
import { User } from "../models/user.model";
import { PasswordUtil } from "./utils/passwordUtil";
import { AuthorizationUtil } from "./utils/authorizationUtil";
import { CreateUserDTO } from "../dto/user/createUserDTO";

export class AuthController {
  /**
   * Register endpoint
   * @param req
   * @param res
   * @param next
   */
  static async register(req, res, next) {
    // TODO add swagger doc
    const user = req.body as CreateUserDTO;

    const existingUser = await User.findOne({
      email: user.email,
    });

    if (existingUser) {
      return ApiResponse.sendErrorResponse(403, "User already exists", res);
    }

    const userDocument = new User({
      email: user.email,
      password: await PasswordUtil.hashPassword(user.password),
    });
    await userDocument.save();

    // for authentication
    const jwtToken = await AuthorizationUtil.createJWT(
      userDocument._id,
      user.email
    );

    return ApiResponse.sendSuccessResponse(
      {
        token: jwtToken,
      },
      res
    );
  }

  /**
   * Login endpoint
   * @param req
   * @param res
   * @param next
   */
  static async login(req, res, next) {
    const user = req.body as CreateUserDTO;

    const existingUser = await User.findOne({
      email: user.email,
    });

    if (existingUser) {
      if (
        // validate password
        // @ts-ignore
        await PasswordUtil.validPassword(user.password, existingUser.password)
      ) {
        const jwtToken = await AuthorizationUtil.createJWT(
          existingUser._id,
          user.email
        );

        return ApiResponse.sendSuccessResponse(
          {
            token: jwtToken,
          },
          res
        );
      }
    }
    return ApiResponse.sendErrorResponse(
      404,
      "No valid credentials given for user",
      res
    );
  }
}
