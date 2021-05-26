import * as express from "express";

const matchesRoutes = express.Router();
matchesRoutes.get("/matches/user/:userId");

export { matchesRoutes };
