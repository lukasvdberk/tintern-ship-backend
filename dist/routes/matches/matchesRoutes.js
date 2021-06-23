"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.matchesRoutes = void 0;
const express = require("express");
const matchController_1 = require("../../controllers/matchController");
const authorization_middleware_1 = require("../../middleware/authorization.middleware");
const matchesRoutes = express.Router();
exports.matchesRoutes = matchesRoutes;
matchesRoutes.get("/matches/user/:userId", authorization_middleware_1.AuthorizationMiddleware.isAuthenticated, matchController_1.MatchController.getMatches);
matchesRoutes.post("/matches/", authorization_middleware_1.AuthorizationMiddleware.isAuthenticated, matchController_1.MatchController.formMatch);
//# sourceMappingURL=matchesRoutes.js.map