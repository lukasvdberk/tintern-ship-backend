import { InternDTO } from "src/dto/intern/internDTO";
import { Intern } from "src/models/intern.model";
import { ApiResponse } from "./utils/apiResponses";

export class InternController {
  static async createIntern(req, res, next) {

    const intern = req.body as InternDTO;
  
    const internDocument = new Intern({
      educationId: intern.educationId,
      name: intern.name,
      age: intern.age,
      description: intern.description,
      phoneNumber: intern.phoneNumber
    });

    await internDocument.save();
  
    return ApiResponse.sendSuccessResponse(
      {
        intern: internDocument
      }
      ,res
    );
  }

  static async editIntern(req, res, next) {

    const internDocument = new Intern({
      _id: req.body.id,
      educationId: req.body.educationId,
      name: req.body.name,
      age: req.body.age,
      description: req.body.description,
      phoneNumber: req.body.phoneNumber
    });
    await internDocument.updateOne({ _id: req.params.id });

    return ApiResponse.sendSuccessResponse({}
      ,res
    );
  }

  static async deleteIntern(req, res, next) {
    const internId = req.params.id;

    await Intern.deleteOne({_id: internId})
    
    return ApiResponse.sendSuccessResponse({}, 
      res
    );
  }
}
