import * as express from "express";
import { CompanyController } from "../../controllers/companyController";
import { AuthorizationMiddleware } from "../../middleware/authorization.middleware";
import { CreateCompanyDTO } from "../../dto/company/createCompanyDTO";
import { dtoValidationMiddleware } from "../../dto/util/dtoBodyChecker";

const companyRouter = express.Router();
companyRouter.post(
  "/companies/user/:userId",
  dtoValidationMiddleware(CreateCompanyDTO),
  AuthorizationMiddleware.isAuthenticated,
  CompanyController.createCompany
);

companyRouter.get("/companies/user/:userId");
companyRouter.put("/companies/:companyId");

export { companyRouter };
