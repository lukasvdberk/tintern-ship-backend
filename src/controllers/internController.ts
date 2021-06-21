import { InternDTO } from "../dto/intern/internDTO";
import { Intern } from "../models/intern.model";
import { ApiResponse } from "./utils/apiResponses";

export class InternController {
  static async createIntern(req, res, next) {
    
    //TODO Check if user is not already registered as a intern or company

    const userId = req.user._id;
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

    Intern.updateOne({_id: internId}, internDocument).then(result => {
      if(result) {
        return ApiResponse.sendSuccessResponse(internDocument ,res)
      } else {
        return ApiResponse.sendErrorResponse(403, 'Could not update intern', res)
      }
    })
  }

  static async deleteIntern(req, res, next) {
    const userId = req.user._id;
    const intern = Intern.findOne({userId:userId})
    const internId = (await intern)._id

    await Intern.deleteOne({_id: internId})
    
    return ApiResponse.sendSuccessResponse(internId, res)
  }

  static async getIntern(req, res, next) {
    const userId = req.user._id;
    const intern = Intern.findOne({userId:userId})
    
    const internId = (await intern)._id
  
    await Intern.findById(internId).then(intern => {
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

        console.log(internDocument)

        return ApiResponse.sendSuccessResponse(internDocument, res)
      } else {
        return ApiResponse.sendErrorResponse(403, 'Intern not found', res)
      }
    })
  }
}
