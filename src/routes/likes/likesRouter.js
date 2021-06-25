"use strict";
exports.__esModule = true;
exports.likesRouter = void 0;
var express = require("express");
var likesController_1 = require("../../controllers/likesController");
var authorization_middleware_1 = require("../../middleware/authorization.middleware");
var likesRouter = express.Router();
exports.likesRouter = likesRouter;
likesRouter.get("/likes/user/:userId", authorization_middleware_1.AuthorizationMiddleware.isAuthenticated, likesController_1.LikesController.getLikes);
likesRouter.post("/likes/", authorization_middleware_1.AuthorizationMiddleware.isAuthenticated, 
// dtoValidationMiddleware(CreateLikesDTO),
likesController_1.LikesController.saveLike);
