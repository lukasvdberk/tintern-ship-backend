import {IsEmail, IsString, MaxLength, MinLength} from "class-validator";
import {Trim} from "class-sanitizer";

export class UserDTO {
    public _id: string
    public email: string;
    public password: string;
}
