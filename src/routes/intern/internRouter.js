"use strict";
exports.__esModule = true;
exports.internRouter = void 0;
var express = require("express");
var authorization_middleware_1 = require("../../middleware/authorization.middleware");
var internController_1 = require("../../controllers/internController");
var createInternDTO_1 = require("../../dto/intern/createInternDTO");
var dtoBodyChecker_1 = require("../../dto/util/dtoBodyChecker");
var internRouter = express.Router();
exports.internRouter = internRouter;
internRouter.post("/interns/user/", dtoBodyChecker_1.dtoValidationMiddleware(createInternDTO_1.CreateInternDTO), authorization_middleware_1.AuthorizationMiddleware.isAuthenticated, internController_1.InternController.createIntern);
internRouter.put("/interns/user/:userId", dtoBodyChecker_1.dtoValidationMiddleware(createInternDTO_1.CreateInternDTO), authorization_middleware_1.AuthorizationMiddleware.isAuthenticated, internController_1.InternController.editIntern);
internRouter["delete"]("/interns/user/:userId", authorization_middleware_1.AuthorizationMiddleware.isAuthenticated, internController_1.InternController.deleteIntern);
internRouter.get("/interns/user/:userId", authorization_middleware_1.AuthorizationMiddleware.isAuthenticated, internController_1.InternController.getIntern);