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

companyRouter.put(
  "/companies/:companyId",
  dtoValidationMiddleware(CreateCompanyDTO),
  AuthorizationMiddleware.isAuthenticated,
  CompanyController.editCompany
);

companyRouter.get("/companies/user/:userId");


export { companyRouter };
