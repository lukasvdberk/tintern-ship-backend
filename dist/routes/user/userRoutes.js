"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express = require("express");
const authorization_middleware_1 = require("../../middleware/authorization.middleware");
const userController_1 = require("../../controllers/userController");
const userRouter = express.Router();
exports.userRouter = userRouter;
userRouter.get("/users/me", authorization_middleware_1.AuthorizationMiddleware.isAuthenticated, userController_1.UserController.getMe);
userRouter.post("/users/avatar", authorization_middleware_1.AuthorizationMiddleware.isAuthenticated, userController_1.UserController.saveAvatar);
//# sourceMappingURL=userRoutes.js.map