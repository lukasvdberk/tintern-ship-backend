"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InternController = void 0;
const intern_model_1 = require("../models/intern.model");
const apiResponses_1 = require("./utils/apiResponses");
class InternController {
    static async createIntern(req, res, next) {
        const userId = req.user._id;
        const intern = req.body;
        const internDocument = new intern_model_1.Intern({
            userId: userId,
            educationId: intern.educationId,
            name: intern.name,
            age: intern.age,
            description: intern.description,
            phoneNumber: intern.phoneNumber
        });
        await internDocument.save();
        return apiResponses_1.ApiResponse.sendSuccessResponse(internDocument, res);
    }
    static async editIntern(req, res, next) {
        const userId = req.user._id;
        const intern = intern_model_1.Intern.findOne({ userId: userId });
        const internId = (await intern)._id;
        const internDocument = new intern_model_1.Intern({
            _id: internId,
            userId: userId,
            educationId: req.body.educationId,
            name: req.body.name,
            age: req.body.age,
            description: req.body.description,
            phoneNumber: req.body.phoneNumber
        });
        intern_model_1.Intern.updateOne({ _id: internId }, internDocument).then(result => {
            if (result) {
                return apiResponses_1.ApiResponse.sendSuccessResponse(internDocument, res);
            }
            else {
                return apiResponses_1.ApiResponse.sendErrorResponse(403, 'Could not update intern', res);
            }
        });
    }
    static async deleteIntern(req, res, next) {
        const userId = req.user._id;
        const intern = intern_model_1.Intern.findOne({ userId: userId });
        const internId = (await intern)._id;
        await intern_model_1.Intern.deleteOne({ _id: internId });
        return apiResponses_1.ApiResponse.sendSuccessResponse(internId, res);
    }
    static async getIntern(req, res, next) {
        const userId = req.user._id;
        const intern = intern_model_1.Intern.findOne({ userId: userId });
        const internId = (await intern)._id;
        await intern_model_1.Intern.findById(internId).then(intern => {
            if (intern) {
                const internDocument = {
                    id: intern['_id'],
                    userId: intern['userId'],
                    educationId: intern['educationId'],
                    name: intern['name'],
                    age: intern['age'],
                    description: intern['description'],
                    phoneNumber: intern['phoneNumber']
                };
                return apiResponses_1.ApiResponse.sendSuccessResponse(internDocument, res);
            }
            else {
                return apiResponses_1.ApiResponse.sendErrorResponse(403, 'Intern not found', res);
            }
        });
    }
}
exports.InternController = InternController;
//# sourceMappingURL=internController.js.map