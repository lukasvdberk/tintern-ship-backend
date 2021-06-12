import * as express from "express";
import {AuthorizationMiddleware} from "../../middleware/authorization.middleware";
import {UserController} from "../../controllers/userController";

const userRouter = express.Router();
userRouter.get("/users/me", AuthorizationMiddleware.isAuthenticated, UserController.getMe);
userRouter.post("/users/avatar", AuthorizationMiddleware.isAuthenticated, UserController.saveAvatar);

export { userRouter };
