import * as express from "express";
import {AuthorizationMiddleware} from "../../middleware/authorization.middleware";
import {UserController} from "../../controllers/userController";

const userRouter = express.Router();
userRouter.get("/users/me", AuthorizationMiddleware.isAuthenticated, UserController.getMe);
userRouter.put("/users/:userId/avatar", AuthorizationMiddleware.isAuthenticated, UserController.saveAvatar);

export { userRouter };
