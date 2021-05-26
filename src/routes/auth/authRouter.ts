import * as express from 'express';
import {AuthController} from "../../controllers/authController";
import {dtoValidationMiddleware} from "../../dto/util/dtoBodyChecker";
import {CreateUserDTO} from "../../dto/user/createUserDTO";

const authRouter = express.Router()


authRouter.post('/auth/login', dtoValidationMiddleware(CreateUserDTO), AuthController.login)
authRouter.post('/auth/register', dtoValidationMiddleware(CreateUserDTO), AuthController.register)

export { authRouter }
