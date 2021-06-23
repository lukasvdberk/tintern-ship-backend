"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.internRouter = void 0;
const express = require("express");
const authorization_middleware_1 = require("../../middleware/authorization.middleware");
const internController_1 = require("../../controllers/internController");
const createInternDTO_1 = require("../../dto/intern/createInternDTO");
const dtoBodyChecker_1 = require("../../dto/util/dtoBodyChecker");
const internRouter = express.Router();
exports.internRouter = internRouter;
internRouter.post("/interns/user/", dtoBodyChecker_1.dtoValidationMiddleware(createInternDTO_1.CreateInternDTO), authorization_middleware_1.AuthorizationMiddleware.isAuthenticated, internController_1.InternController.createIntern);
internRouter.put("/interns/user/:userId", dtoBodyChecker_1.dtoValidationMiddleware(createInternDTO_1.CreateInternDTO), authorization_middleware_1.AuthorizationMiddleware.isAuthenticated, internController_1.InternController.editIntern);
internRouter.delete("/interns/user/:userId", authorization_middleware_1.AuthorizationMiddleware.isAuthenticated, internController_1.InternController.deleteIntern);
internRouter.get("/interns/user/:userId", authorization_middleware_1.AuthorizationMiddleware.isAuthenticated, internController_1.InternController.getIntern);
//# sourceMappingURL=internRouter.js.map