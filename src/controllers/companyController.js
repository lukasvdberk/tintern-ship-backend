"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.CompanyController = void 0;
var company_model_1 = require("../models/company.model");
var apiResponses_1 = require("./utils/apiResponses");
var internProject_model_1 = require("../models/internProject.model");
var education_model_1 = require("../models/education.model");
var user_model_1 = require("../models/user.model");
var intern_model_1 = require("../models/intern.model");
var CompanyController = /** @class */ (function () {
    function CompanyController() {
    }
    CompanyController.createCompany = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var userId, company, companyDocument, companyDto;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        userId = req.user._id;
                        company = req.body;
                        companyDocument = new company_model_1.Company({
                            userId: userId,
                            name: company.name,
                            description: company.description,
                            phoneNumber: company.phoneNumber
                        });
                        return [4 /*yield*/, companyDocument.save()];
                    case 1:
                        _a.sent();
                        companyDto = __assign({ id: companyDocument._id }, company);
                        return [2 /*return*/, apiResponses_1.ApiResponse.sendSuccessResponse(companyDto, res)];
                }
            });
        });
    };
    CompanyController.editCompany = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var userId, company, companyId, companyDocument;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        userId = req.user._id;
                        company = company_model_1.Company.findOne({ userId: userId });
                        return [4 /*yield*/, company];
                    case 1:
                        companyId = (_a.sent())._id;
                        companyDocument = new company_model_1.Company({
                            _id: companyId,
                            userId: userId,
                            name: req.body.name,
                            description: req.body.description,
                            phoneNumber: req.body.phoneNumber
                        });
                        company_model_1.Company.updateOne({ _id: companyId }, companyDocument).then(function (result) {
                            if (result) {
                                return apiResponses_1.ApiResponse.sendSuccessResponse(companyDocument, res);
                            }
                            else {
                                return apiResponses_1.ApiResponse.sendErrorResponse(403, 'Could not update company', res);
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    CompanyController.deleteCompany = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var userId, company, companyId;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        userId = req.user._id;
                        company = company_model_1.Company.findOne({ userId: userId });
                        return [4 /*yield*/, company];
                    case 1:
                        companyId = (_a.sent())._id;
                        return [4 /*yield*/, company_model_1.Company.deleteOne({ _id: companyId })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, apiResponses_1.ApiResponse.sendSuccessResponse(companyId, res)];
                }
            });
        });
    };
    CompanyController.getAllCompanies = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, company_model_1.Company.find().then(function (company) {
                            if (company) {
                                return apiResponses_1.ApiResponse.sendSuccessResponse(company, res);
                            }
                            else {
                                return apiResponses_1.ApiResponse.sendErrorResponse(403, 'Company not found', res);
                            }
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CompanyController.getCompany = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var userId, company, companyId;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        userId = req.user._id;
                        company = company_model_1.Company.findOne({ userId: userId });
                        return [4 /*yield*/, company];
                    case 1:
                        companyId = (_a.sent())._id;
                        return [4 /*yield*/, company_model_1.Company.findById(companyId).then(function (company) {
                                if (company) {
                                    return apiResponses_1.ApiResponse.sendSuccessResponse(company, res);
                                }
                                else {
                                    return apiResponses_1.ApiResponse.sendErrorResponse(403, 'Company not found', res);
                                }
                            })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CompanyController.getCompanyById = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var companyId;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        companyId = req.params.companyId;
                        return [4 /*yield*/, company_model_1.Company.findById(companyId).then(function (company) {
                                if (company) {
                                    var companyDocument = {
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
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CompanyController.addInternShipJobToCompany = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var internshipProjectDTO, internProject;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        internshipProjectDTO = req.body;
                        internProject = new internProject_model_1.InternProject({
                            educationId: internshipProjectDTO.educationId,
                            companyId: internshipProjectDTO.companyId,
                            description: internshipProjectDTO.description
                        });
                        return [4 /*yield*/, internProject.save()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, apiResponses_1.ApiResponse.sendSuccessResponse({
                                id: internProject.id,
                                educationId: internshipProjectDTO.educationId,
                                companyId: internshipProjectDTO.companyId,
                                description: internshipProjectDTO.description
                            }, res)];
                }
            });
        });
    };
    CompanyController.getInternShipProjectOfCompany = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var companyId, internProjects, company, user, internProjectsParsed, _i, internProjects_1, project, education;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        companyId = req.params.companyId;
                        return [4 /*yield*/, internProject_model_1.InternProject.find({
                                companyId: companyId
                            })];
                    case 1:
                        internProjects = _a.sent();
                        return [4 /*yield*/, company_model_1.Company.findById(companyId)];
                    case 2:
                        company = _a.sent();
                        return [4 /*yield*/, user_model_1.User.findById(company.userId)];
                    case 3:
                        user = _a.sent();
                        internProjectsParsed = [];
                        _i = 0, internProjects_1 = internProjects;
                        _a.label = 4;
                    case 4:
                        if (!(_i < internProjects_1.length)) return [3 /*break*/, 7];
                        project = internProjects_1[_i];
                        return [4 /*yield*/, education_model_1.Education.findById(project.educationId)];
                    case 5:
                        education = _a.sent();
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
                                    avatarUrl: user.avatarUrl
                                }
                            },
                            description: project.description
                        });
                        _a.label = 6;
                    case 6:
                        _i++;
                        return [3 /*break*/, 4];
                    case 7: return [2 /*return*/, apiResponses_1.ApiResponse.sendSuccessResponse(internProjectsParsed, res)];
                }
            });
        });
    };
    CompanyController.getFittingInternshipProjects = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var userId, intern, educationId, internProjects;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        userId = req.user._id;
                        return [4 /*yield*/, intern_model_1.Intern.find({
                                userId: userId
                            })
                            // console.log(intern)
                        ];
                    case 1:
                        intern = _a.sent();
                        educationId = intern[0]['educationId'];
                        return [4 /*yield*/, internProject_model_1.InternProject.find({
                                educationId: educationId
                            })];
                    case 2:
                        internProjects = _a.sent();
                        return [2 /*return*/, apiResponses_1.ApiResponse.sendSuccessResponse(internProjects, res)];
                }
            });
        });
    };
    return CompanyController;
}());
exports.CompanyController = CompanyController;
