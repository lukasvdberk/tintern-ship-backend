import * as express from "express";
import { userRouter } from "./user/userRoutes";
import { educationRouter } from "./education/educationRouter";
import { internRouter } from "./intern/internRouter";
import { likesRouter } from "./likes/likesRouter";
import { matchesRoutes } from "./matches/matchesRoutes";
import { authRouter } from "./auth/authRouter";
import { companyRouter } from "./company/companyRouter";
import {firebaseRouter} from "./firebase/firebaseRouter";

const routesManager = express.Router();

routesManager.use(userRouter);
routesManager.use(educationRouter);
routesManager.use(companyRouter);
routesManager.use(internRouter);
routesManager.use(likesRouter);
routesManager.use(firebaseRouter);
routesManager.use(matchesRoutes);
routesManager.use(authRouter);

export { routesManager };
