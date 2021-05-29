import * as express from "express";
import { AuthorizationMiddleware } from "../../middleware/authorization.middleware";
import { InternController } from "../../controllers/internController";
import { CreateInternDTO } from "../../dto/intern/createInternDTO";
import { dtoValidationMiddleware } from "../../dto/util/dtoBodyChecker";

const internRouter = express.Router();
internRouter.post(
  "/interns/user/:userId",
  dtoValidationMiddleware(CreateInternDTO),
  AuthorizationMiddleware.isAuthenticated,
  InternController.createIntern
);


internRouter.get("/interns/:userId");
internRouter.put("/interns/:internId");
internRouter.delete("/interns/:internId")

export { internRouter };
