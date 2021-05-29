import { InternDTO } from "../dto/intern/internDTO";
import { Intern } from "../models/intern.model";
import { ApiResponse } from "./utils/apiResponses";

export class InternController {
  static async createIntern(req, res, next) {
    const userId = req.user._id;
    // console.log(userId)
    const intern = req.body as InternDTO;
  
    const internDocument = new Intern({
      userId: userId,
      educationId: intern.educationId,
      name: intern.name,
      age: intern.age,
      description: intern.description,
      phoneNumber: intern.phoneNumber
    });

    await internDocument.save();
  
    return ApiResponse.sendSuccessResponse(internDocument, res);
  }

  static async editIntern(req, res, next) {
    const userId = req.user._id;
    const intern = Intern.findOne({userId:userId})
    const internId = (await intern)._id

    const internDocument = new Intern({
      _id: internId,
      userId: userId,
      educationId: req.body.educationId,
      name: req.body.name,
      age: req.body.age,
      description: req.body.description,
      phoneNumber: req.body.phoneNumber
    });

    await internDocument.updateOne({ _id: internId });

    return ApiResponse.sendSuccessResponse(internDocument ,res)
  }

  static async deleteIntern(req, res, next) {
    const internId = req.params.id;

    await Intern.deleteOne({_id: internId})
    
    return ApiResponse.sendSuccessResponse(internId, res)
  }

  static async getIntern(req, res, next) {
    const internId = req.params.id;

    await Intern.findById(internId).then(intern => {
      if (intern) {
        return ApiResponse.sendSuccessResponse(internId, res)
      } else {
        return ApiResponse.sendErrorResponse(403, 'Intern not found', res)
      }
    })
  }
}
