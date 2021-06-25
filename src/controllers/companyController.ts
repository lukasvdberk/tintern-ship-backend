import { CompanyDTO } from "../dto/company/companyDTO";
import { Company } from "../models/company.model";
import { ApiResponse } from "./utils/apiResponses";
import {CreateInternProjectDTO} from "../dto/company/createInternProjectDTO";
import {InternProject} from "../models/internProject.model";
import {Education} from "../models/education.model";
import {User} from "../models/user.model";
import { Intern } from "../models/intern.model";

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

    const companyDto = {
      id: companyDocument._id,
      ...company,
    }
    return ApiResponse.sendSuccessResponse(companyDto, res);
  }

  static async editCompany(req, res, next) {
    const userId = req.user._id;
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

  static async getAllCompanies(req, res, next) {
    await Company.find().then(company => {
      if (company) {
        return ApiResponse.sendSuccessResponse(company, res)
      } else {
        return ApiResponse.sendErrorResponse(403, 'Company not found', res)
      }
    })
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

  static async getCompanyById(req, res, next) {
    const companyId = req.params.companyId;

    await Company.findById(companyId).then(company => {
      if (company) {

        const companyDocument = {
          id: company['_id'],
          userId: company['userId'],
          name: company['name'],
          description: company['description'],
          phoneNumber: company['phoneNumber']
        };

        return ApiResponse.sendSuccessResponse(companyDocument, res)
      } else {
        return ApiResponse.sendErrorResponse(403, 'Company not found', res)
      }
    })
  }

  static async addInternShipJobToCompany(req, res, next) {
    const internshipProjectDTO = req.body as CreateInternProjectDTO

    const internProject = new InternProject({
      educationId: internshipProjectDTO.educationId,
      companyId: internshipProjectDTO.companyId,
      description: internshipProjectDTO.description,
    })

    await internProject.save()

    return ApiResponse.sendSuccessResponse({
      id: internProject.id,
      educationId: internshipProjectDTO.educationId,
      companyId: internshipProjectDTO.companyId,
      description: internshipProjectDTO.description,
    }, res)
  }

  static async getInternShipProjectOfCompany(req, res, next) {
    const companyId = req.params.companyId as string

    const internProjects: any[] = await InternProject.find({
      companyId: companyId
    })

    const company: any = await Company.findById(companyId)
    const user: any = await User.findById(company.userId)

    const internProjectsParsed = [];
    for (const project of internProjects) {
      const education: any =  await Education.findById(project.educationId)
      internProjectsParsed.push({
        id: project._id,
        education: {
          id: education.id,
          name: education.name
        },
        company: {
          id: company.id,
          name: company.name,
          description: company.description,
          phoneNumber: company.phoneNumber,
          user: {
            id: user.id,
            email: user.email,
            avatarUrl: user.avatarUrl,
          },
        },
        description: project.description,
      });
    }
    return ApiResponse.sendSuccessResponse(internProjectsParsed, res)
  }

  static async getFittingInternshipProjects(req, res, next) {
    const userId: string = req.user._id

    const intern: any = await Intern.find({
      userId: userId
    })

    const educationId = intern[0]['educationId'];

    const internProjects: any[] = await InternProject.find({
      educationId: educationId
    })

    return ApiResponse.sendSuccessResponse(internProjects, res)
  }

  static async getProjectBelongingToCompany(req, res, next) {
    const userId: string = req.user._id

    const company: any = await Company.find({
      userId: userId
    });

    const companyId = company[0]._id;

    const companyProjects: any[] = await InternProject.find({
      companyId: companyId
    })
    
    return ApiResponse.sendSuccessResponse(companyProjects, res)
  }
}
