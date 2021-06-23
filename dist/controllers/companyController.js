"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyController = void 0;
const company_model_1 = require("../models/company.model");
const apiResponses_1 = require("./utils/apiResponses");
const internProject_model_1 = require("../models/internProject.model");
const education_model_1 = require("../models/education.model");
const user_model_1 = require("../models/user.model");
const intern_model_1 = require("../models/intern.model");
class CompanyController {
    static async createCompany(req, res, next) {
        const userId = req.user._id;
        const company = req.body;
        const companyDocument = new company_model_1.Company({
            userId: userId,
            name: company.name,
            description: company.description,
            phoneNumber: company.phoneNumber
        });
        await companyDocument.save();
        const companyDto = Object.assign({ id: companyDocument._id }, company);
        return apiResponses_1.ApiResponse.sendSuccessResponse(companyDto, res);
    }
    static async editCompany(req, res, next) {
        const userId = req.user._id;
        const company = company_model_1.Company.findOne({ userId: userId });
        const companyId = (await company)._id;
        const companyDocument = new company_model_1.Company({
            _id: companyId,
            userId: userId,
            name: req.body.name,
            description: req.body.description,
            phoneNumber: req.body.phoneNumber
        });
        company_model_1.Company.updateOne({ _id: companyId }, companyDocument).then(result => {
            if (result) {
                return apiResponses_1.ApiResponse.sendSuccessResponse(companyDocument, res);
            }
            else {
                return apiResponses_1.ApiResponse.sendErrorResponse(403, 'Could not update company', res);
            }
        });
    }
    static async deleteCompany(req, res, next) {
        const userId = req.user._id;
        const company = company_model_1.Company.findOne({ userId: userId });
        const companyId = (await company)._id;
        await company_model_1.Company.deleteOne({ _id: companyId });
        return apiResponses_1.ApiResponse.sendSuccessResponse(companyId, res);
    }
    static async getAllCompanies(req, res, next) {
        await company_model_1.Company.find().then(company => {
            if (company) {
                return apiResponses_1.ApiResponse.sendSuccessResponse(company, res);
            }
            else {
                return apiResponses_1.ApiResponse.sendErrorResponse(403, 'Company not found', res);
            }
        });
    }
    static async getCompany(req, res, next) {
        const userId = req.user._id;
        const company = company_model_1.Company.findOne({ userId: userId });
        const companyId = (await company)._id;
        await company_model_1.Company.findById(companyId).then(company => {
            if (company) {
                return apiResponses_1.ApiResponse.sendSuccessResponse(company, res);
            }
            else {
                return apiResponses_1.ApiResponse.sendErrorResponse(403, 'Company not found', res);
            }
        });
    }
    static async getCompanyById(req, res, next) {
        const companyId = req.params.companyId;
        await company_model_1.Company.findById(companyId).then(company => {
            if (company) {
                const companyDocument = {
                    id: company['_id'],
                    userId: company['userId'],
                    name: company['name'],
                    description: company['description'],
                    phoneNumber: company['phoneNumber']
                };
                return apiResponses_1.ApiResponse.sendSuccessResponse(companyDocument, res);
            }
            else {
                return apiResponses_1.ApiResponse.sendErrorResponse(403, 'Company not found', res);
            }
        });
    }
    static async addInternShipJobToCompany(req, res, next) {
        const internshipProjectDTO = req.body;
        const internProject = new internProject_model_1.InternProject({
            educationId: internshipProjectDTO.educationId,
            companyId: internshipProjectDTO.companyId,
            description: internshipProjectDTO.description,
        });
        await internProject.save();
        return apiResponses_1.ApiResponse.sendSuccessResponse({
            id: internProject.id,
            educationId: internshipProjectDTO.educationId,
            companyId: internshipProjectDTO.companyId,
            description: internshipProjectDTO.description,
        }, res);
    }
    static async getInternShipProjectOfCompany(req, res, next) {
        const companyId = req.params.companyId;
        const internProjects = await internProject_model_1.InternProject.find({
            companyId: companyId
        });
        const company = await company_model_1.Company.findById(companyId);
        const user = await user_model_1.User.findById(company.userId);
        const internProjectsParsed = [];
        for (const project of internProjects) {
            const education = await education_model_1.Education.findById(project.educationId);
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
        return apiResponses_1.ApiResponse.sendSuccessResponse(internProjectsParsed, res);
    }
    static async getFittingInternshipProjects(req, res, next) {
        const userId = req.user._id;
        const intern = await intern_model_1.Intern.find({
            userId: userId
        });
        const educationId = intern[0]['educationId'];
        const internProjects = await internProject_model_1.InternProject.find({
            educationId: educationId
        });
        return apiResponses_1.ApiResponse.sendSuccessResponse(internProjects, res);
    }
}
exports.CompanyController = CompanyController;
//# sourceMappingURL=companyController.js.map