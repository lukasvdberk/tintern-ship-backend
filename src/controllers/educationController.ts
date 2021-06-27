import {Education} from "../models/education.model";
import {ApiResponse} from "./utils/apiResponses";

export class EducationController {
    /**
     * Gets all the available educations
     * @param req
     * @param res
     * @param next
     */
    static async getEducations(req, res, next) {
        // gets all educations
        let educations: any[] = await Education.find({})

        educations = educations.map((education) => { return {
            id: education._id,
            name: education.name
        }})
        return ApiResponse.sendSuccessResponse(educations, res)
    }

    static async getEducationById(req, res, next) {

        const educationId = req.params.educationId;
        let education: any = await Education.findById(educationId)

        return ApiResponse.sendSuccessResponse(education, res)
    }
}
