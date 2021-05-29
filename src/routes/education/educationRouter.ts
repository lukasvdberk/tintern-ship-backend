import * as express from "express";
import {EducationController} from "../../controllers/educationController";

const educationRouter = express.Router();
educationRouter.get("/educations", EducationController.getEducations);

export { educationRouter };
