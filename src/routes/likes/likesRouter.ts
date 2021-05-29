import * as express from "express";
import {dtoValidationMiddleware} from "../../dto/util/dtoBodyChecker";
import {LikesController} from "../../controllers/likesController";
import {LikesDTO} from "../../dto/likes/createLikeDTO";

const likesRouter = express.Router();
likesRouter.get("/likes/user/:userId");
likesRouter.post("/likes/", dtoValidationMiddleware(LikesDTO), LikesController.saveLike);

export { likesRouter };
