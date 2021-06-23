"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.likesRouter = void 0;
const express = require("express");
const likesController_1 = require("../../controllers/likesController");
const authorization_middleware_1 = require("../../middleware/authorization.middleware");
const likesRouter = express.Router();
exports.likesRouter = likesRouter;
likesRouter.get("/likes/user/:userId", authorization_middleware_1.AuthorizationMiddleware.isAuthenticated, likesController_1.LikesController.getLikes);
likesRouter.post("/likes/", authorization_middleware_1.AuthorizationMiddleware.isAuthenticated, likesController_1.LikesController.saveLike);
//# sourceMappingURL=likesRouter.js.map