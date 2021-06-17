import * as express from "express";
import { MatchController } from "../../controllers/matchController";
import { AuthorizationMiddleware } from "../../middleware/authorization.middleware";

const matchesRoutes = express.Router();
  matchesRoutes.get(
    "/matches/user/:userId",
    AuthorizationMiddleware.isAuthenticated,
    MatchController.getMatches
  );

  matchesRoutes.post(
    "/matches/",
    AuthorizationMiddleware.isAuthenticated,
    MatchController.formMatch
  );

export { matchesRoutes };
