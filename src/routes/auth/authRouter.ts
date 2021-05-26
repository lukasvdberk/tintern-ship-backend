import * as express from 'express';
import {AuthorizationUtil} from "../../controllers/utils/authorizationUtil";
import {AuthController} from "../../controllers/authController";

const authRouter = express.Router()
authRouter.post('/auth/login', AuthController.login)
authRouter.post('/auth/register', AuthController.register)

export { authRouter }
