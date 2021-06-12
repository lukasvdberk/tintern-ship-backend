import * as express from "express";
import {dtoValidationMiddleware} from "../../dto/util/dtoBodyChecker";
import {AuthorizationMiddleware} from "../../middleware/authorization.middleware";
import {InternController} from "../../controllers/internController";
import {FirebaseDeviceDTO} from "../../dto/firebase/firebaseDeviceDTO";
import {FirebaseController} from "../../controllers/firebaseController";

const firebaseRouter = express.Router();
firebaseRouter.post(
    "/firebase/user",
    dtoValidationMiddleware(FirebaseDeviceDTO),
    AuthorizationMiddleware.isAuthenticated,
    FirebaseController.saveUserToken
);

export { firebaseRouter };
