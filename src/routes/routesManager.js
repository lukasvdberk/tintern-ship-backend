"use strict";
exports.__esModule = true;
exports.routesManager = void 0;
var express = require("express");
var userRoutes_1 = require("./user/userRoutes");
var educationRouter_1 = require("./education/educationRouter");
var internRouter_1 = require("./intern/internRouter");
var likesRouter_1 = require("./likes/likesRouter");
var matchesRoutes_1 = require("./matches/matchesRoutes");
var authRouter_1 = require("./auth/authRouter");
var companyRouter_1 = require("./company/companyRouter");
var firebaseRouter_1 = require("./firebase/firebaseRouter");
var routesManager = express.Router();
exports.routesManager = routesManager;
routesManager.use(userRoutes_1.userRouter);
routesManager.use(educationRouter_1.educationRouter);
routesManager.use(companyRouter_1.companyRouter);
routesManager.use(internRouter_1.internRouter);
routesManager.use(likesRouter_1.likesRouter);
routesManager.use(firebaseRouter_1.firebaseRouter);
routesManager.use(matchesRoutes_1.matchesRoutes);
routesManager.use(authRouter_1.authRouter);
