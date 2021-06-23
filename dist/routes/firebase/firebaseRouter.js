"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.firebaseRouter = void 0;
const express = require("express");
const dtoBodyChecker_1 = require("../../dto/util/dtoBodyChecker");
const authorization_middleware_1 = require("../../middleware/authorization.middleware");
const firebaseDeviceDTO_1 = require("../../dto/firebase/firebaseDeviceDTO");
const firebaseController_1 = require("../../controllers/firebaseController");
const firebaseRouter = express.Router();
exports.firebaseRouter = firebaseRouter;
firebaseRouter.post("/firebase/user", dtoBodyChecker_1.dtoValidationMiddleware(firebaseDeviceDTO_1.FirebaseDeviceDTO), authorization_middleware_1.AuthorizationMiddleware.isAuthenticated, firebaseController_1.FirebaseController.saveUserToken);
//# sourceMappingURL=firebaseRouter.js.map