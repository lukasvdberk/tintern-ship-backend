"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EducationController = void 0;
const education_model_1 = require("../models/education.model");
const apiResponses_1 = require("./utils/apiResponses");
class EducationController {
    static async getEducations(req, res, next) {
        let educations = await education_model_1.Education.find({});
        educations = educations.map((education) => {
            return {
                id: education._id,
                name: education.name
            };
        });
        return apiResponses_1.ApiResponse.sendSuccessResponse(educations, res);
    }
}
exports.EducationController = EducationController;
//# sourceMappingURL=educationController.js.map