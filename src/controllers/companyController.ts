import { InternDTO } from "src/dto/intern/internDTO";
import { Company } from "src/models/company.model";
import { ApiResponse } from "./utils/apiResponses";

export class CompanyController {
  static async createIntern(req, res, next) {
    const userId = req.user._id;
    const company = req.body as InternDTO;
  
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