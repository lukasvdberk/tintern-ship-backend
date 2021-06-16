import * as express from "express";
import { CompanyController } from "../../controllers/companyController";
import { AuthorizationMiddleware } from "../../middleware/authorization.middleware";
import { CreateCompanyDTO } from "../../dto/company/createCompanyDTO";
import { dtoValidationMiddleware } from "../../dto/util/dtoBodyChecker";
import {CreateInternDTO} from "../../dto/intern/createInternDTO";
import {CreateInternProjectDTO} from "../../dto/company/createInternProjectDTO";

const companyRouter = express.Router();
companyRouter.post(
  "/companies/",
  dtoValidationMiddleware(CreateCompanyDTO),
  AuthorizationMiddleware.isAuthenticated,
  CompanyController.createCompany
);

companyRouter.put(
  "/companies/user/:userId",
  dtoValidationMiddleware(CreateCompanyDTO),
  AuthorizationMiddleware.isAuthenticated,
  CompanyController.editCompany
);

companyRouter.delete(
  "/companies/user/:userId",
  AuthorizationMiddleware.isAuthenticated,
  CompanyController.deleteCompany
);

companyRouter.get(
  "/companies/user/:userId",
  AuthorizationMiddleware.isAuthenticated,
  CompanyController.getCompany
);

companyRouter.post(
    "/companies/internship-project",
    dtoValidationMiddleware(CreateInternProjectDTO),
    AuthorizationMiddleware.isAuthenticated,
    CompanyController.addInternShipJobToCompany
);

export { companyRouter };
