import { Trim } from "class-sanitizer";
import { IsString, MaxLength, MinLength } from "class-validator";

export class CreateInternDTO {
  @IsString()
  @Trim()
  public educationId?: string;

  @IsString()
  public name?: string;

  @IsString()
  @MaxLength(3, { message: 'Age shoud be a maximum of 3 characters'})
  @Trim()
  public age?: string;

  @IsString()
  @MinLength(1, { message: 'Age shoud be a minimum of 1 characters'})
  @MaxLength(400, { message: 'Age shoud be a maximum of 400 characters'})
  public description?: string;

  @IsString()
  @MinLength(9, { message: 'Age shoud be a minimum of 9 characters'})
  @MaxLength(9, { message: 'Age shoud be a maximum of 9 characters'})
  public phoneNumber?: string;

}