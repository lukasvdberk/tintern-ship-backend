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
        const educations = await Education.find({})

        return ApiResponse.sendSuccessResponse(educations, res)
    }
}
