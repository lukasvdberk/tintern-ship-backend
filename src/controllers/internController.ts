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
  
    return ApiResponse.sendSuccessResponse({}
      ,res
    );
  }

  static async editIntern() {
    
  }
}
