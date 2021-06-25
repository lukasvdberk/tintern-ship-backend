"use strict";
exports.__esModule = true;
exports.matchesRoutes = void 0;
var express = require("express");
var matchController_1 = require("../../controllers/matchController");
var authorization_middleware_1 = require("../../middleware/authorization.middleware");
var matchesRoutes = express.Router();
exports.matchesRoutes = matchesRoutes;
matchesRoutes.get("/matches/user/:userId", authorization_middleware_1.AuthorizationMiddleware.isAuthenticated, matchController_1.MatchController.getMatches);
matchesRoutes.post("/matches/", authorization_middleware_1.AuthorizationMiddleware.isAuthenticated, matchController_1.MatchController.formMatch);