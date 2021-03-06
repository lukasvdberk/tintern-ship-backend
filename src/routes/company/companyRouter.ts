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

companyRouter.get(
  "/companies/",
  AuthorizationMiddleware.isAuthenticated,
  CompanyController.getAllCompanies
);

companyRouter.post(
    "/companies/internship-project",
    dtoValidationMiddleware(CreateInternProjectDTO),
    AuthorizationMiddleware.isAuthenticated,
    CompanyController.addInternShipJobToCompany
);

companyRouter.get(
    "/companies/internship-project/:companyId",
    AuthorizationMiddleware.isAuthenticated,
    CompanyController.getInternShipProjectOfCompany
);

companyRouter.get(
  "/companies/fitting-internship-projects",
  AuthorizationMiddleware.isAuthenticated,
  CompanyController.getFittingInternshipProjects
);

companyRouter.get(
  "/companies/company/:companyId",
  AuthorizationMiddleware.isAuthenticated,
  CompanyController.getCompanyById
);

companyRouter.get(
  "/companies/userId/:userId",
  AuthorizationMiddleware.isAuthenticated,
  CompanyController.getCompanyByUserId
);

companyRouter.get(
  "/companies/projects",
  AuthorizationMiddleware.isAuthenticated,
  CompanyController.getProjectBelongingToCompany
)

export { companyRouter };
