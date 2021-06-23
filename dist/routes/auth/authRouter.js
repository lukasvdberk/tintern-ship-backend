"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
const express = require("express");
const authController_1 = require("../../controllers/authController");
const dtoBodyChecker_1 = require("../../dto/util/dtoBodyChecker");
const createUserDTO_1 = require("../../dto/user/createUserDTO");
const authRouter = express.Router();
exports.authRouter = authRouter;
authRouter.post("/auth/login", dtoBodyChecker_1.dtoValidationMiddleware(createUserDTO_1.CreateUserDTO), authController_1.AuthController.login);
authRouter.post("/auth/register", dtoBodyChecker_1.dtoValidationMiddleware(createUserDTO_1.CreateUserDTO), authController_1.AuthController.register);
//# sourceMappingURL=authRouter.js.map