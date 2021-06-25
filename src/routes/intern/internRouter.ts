import * as express from "express";
import { AuthorizationMiddleware } from "../../middleware/authorization.middleware";
import { InternController } from "../../controllers/internController";
import { CreateInternDTO } from "../../dto/intern/createInternDTO";
import { dtoValidationMiddleware } from "../../dto/util/dtoBodyChecker";

const internRouter = express.Router();
internRouter.post(
  "/interns/user/",
  dtoValidationMiddleware(CreateInternDTO),
  AuthorizationMiddleware.isAuthenticated,
  InternController.createIntern
);

internRouter.put(
  "/interns/user/:userId",
  dtoValidationMiddleware(CreateInternDTO),
  AuthorizationMiddleware.isAuthenticated,
  InternController.editIntern
);

internRouter.delete(
  "/interns/user/:userId",
  AuthorizationMiddleware.isAuthenticated,
  InternController.deleteIntern
);


internRouter.get(
  "/interns/user/:userId",
  AuthorizationMiddleware.isAuthenticated,
  InternController.getIntern
);

internRouter.get(
  "/interns/fitting-interns/:educationId",
  AuthorizationMiddleware.isAuthenticated,
  InternController.getListOfIntersByEducationId
)

export { internRouter };
