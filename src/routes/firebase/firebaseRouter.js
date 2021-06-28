"use strict";
exports.__esModule = true;
exports.firebaseRouter = void 0;
var express = require("express");
var dtoBodyChecker_1 = require("../../dto/util/dtoBodyChecker");
var authorization_middleware_1 = require("../../middleware/authorization.middleware");
var firebaseDeviceDTO_1 = require("../../dto/firebase/firebaseDeviceDTO");
var firebaseController_1 = require("../../controllers/firebaseController");
var firebaseRouter = express.Router();
exports.firebaseRouter = firebaseRouter;
firebaseRouter.post("/firebase/user", dtoBodyChecker_1.dtoValidationMiddleware(firebaseDeviceDTO_1.FirebaseDeviceDTO), authorization_middleware_1.AuthorizationMiddleware.isAuthenticated, firebaseController_1.FirebaseController.saveUserToken);