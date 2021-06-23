"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.educationRouter = void 0;
const express = require("express");
const educationController_1 = require("../../controllers/educationController");
const educationRouter = express.Router();
exports.educationRouter = educationRouter;
educationRouter.get("/educations", educationController_1.EducationController.getEducations);
//# sourceMappingURL=educationRouter.js.map