import { IsEmail, IsString, MaxLength, MinLength } from "class-validator";
import { Trim } from "class-sanitizer";

export class CreateUserDTO {
    @IsEmail({ }, { message: "Email is not of type email." })
    @MinLength(4, { message: "Password should be an minimum of 4 characters" })
    @Trim()
    public email?: string;

    @IsString()
    @MinLength(4, { message: "Password should be an minimum of 8 characters" })
    @MaxLength(16, { message: "Password should be an maximum of 16 characters" })
    @Trim()
    public password?: string;
}
