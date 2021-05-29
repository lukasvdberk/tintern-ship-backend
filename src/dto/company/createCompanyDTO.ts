import { Trim } from "class-sanitizer";
import { IsString, MaxLength, MinLength } from "class-validator";

export class CreateCompanyDTO {

  @IsString()
  public name?: string;

  @IsString()
  @MinLength(1, { message: 'Age shoud be a minimum of 1 characters'})
  @MaxLength(400, { message: 'Age shoud be a maximum of 400 characters'})
  public description?: string;

  @IsString()
  @MinLength(8, { message: 'Age shoud be a minimum of 9 characters'})
  @MaxLength(10, { message: 'Age shoud be a maximum of 9 characters'})
  public phoneNumber?: string;

}