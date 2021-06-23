"use strict";
exports.__esModule = true;
exports.educationRouter = void 0;
var express = require("express");
var educationController_1 = require("../../controllers/educationController");
var educationRouter = express.Router();
exports.educationRouter = educationRouter;
educationRouter.get("/educations", educationController_1.EducationController.getEducations);
