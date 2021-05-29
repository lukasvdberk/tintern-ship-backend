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

  static async editCompany(req, res, next) {
    const userId = req.user_id;
    const company = Company.findOne({userId:userId})
    const companyId = (await company)._id

    const companyDocument = new Company({
      _id: companyId,
      userId: userId,
      name: req.body.name,
      description: req.body.description,
      phoneNumber: req.body.phoneNumber
    });

    Company.updateOne({_id: companyId}, companyDocument).then(result => {
      if(result) {
        return ApiResponse.sendSuccessResponse(companyDocument, res)
      } else { 
        return ApiResponse.sendErrorResponse(403, 'Could not update company', res)
      }
    })
  }

  static async deleteCompany(req, res, next) {
    const userId = req.user._id;
    const company = Company.findOne({userId:userId})
    const companyId = (await company)._id

    await Company.deleteOne({_id: companyId})
    
    return ApiResponse.sendSuccessResponse(companyId, res)
  }

  static async getCompany(req, res, next) {
    const userId = req.user._id;
    const company = Company.findOne({userId:userId})
    const companyId = (await company)._id

    await Company.findById(companyId).then(company => {
      if (company) {
        return ApiResponse.sendSuccessResponse(company, res)
      } else {
        return ApiResponse.sendErrorResponse(403, 'Company not found', res)
      }
    })
  }
}