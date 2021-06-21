import * as express from "express";
import {dtoValidationMiddleware} from "../../dto/util/dtoBodyChecker";
import {LikesController} from "../../controllers/likesController";
import {CreateLikesDTO} from "../../dto/likes/createLikeDTO";
import {AuthorizationMiddleware} from "../../middleware/authorization.middleware";

const likesRouter = express.Router();
likesRouter.get(
  "/likes/user/:userId",
  AuthorizationMiddleware.isAuthenticated,
  LikesController.getLikes
);
likesRouter.post(
  "/likes/",
  AuthorizationMiddleware.isAuthenticated,
  // dtoValidationMiddleware(CreateLikesDTO),
  LikesController.saveLike
);

export { likesRouter };
