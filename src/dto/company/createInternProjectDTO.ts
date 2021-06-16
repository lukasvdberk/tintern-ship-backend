import { IsString, MaxLength, MinLength } from "class-validator";

export class CreateInternProjectDTO {

    @IsString()
    public educationId?: string;

    @IsString()
    public companyId?: string;

    @IsString()
    @MinLength(1, { message: 'Description should be a minimum of 1 characters'})
    public description?: string;

}
