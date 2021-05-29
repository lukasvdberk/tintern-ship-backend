import { CompanyDTO } from "../dto/company/companyDTO";
import { Company } from "../models/company.model";
import { ApiResponse } from "./utils/apiResponses";

export class CompanyController {
  static async createCompany(req, res, next) {

    //TODO Check if user is not already registered as a intern or company

    const userId = req.user._id;
    const company = req.body as CompanyDTO;
  
    const companyDocument = new Company({
      userId: userId,
      name: company.name,
      description: company.description,
      phoneNumber: company.phoneNumber
    });

    await companyDocument.save();
  
    return ApiResponse.sendSuccessResponse(companyDocument, res);
  }
}