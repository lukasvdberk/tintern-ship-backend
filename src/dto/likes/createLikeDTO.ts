import {IsBoolean, IsString} from "class-validator";
import {Trim} from "class-sanitizer";

export class CreateLikesDTO{
    @IsString()
    public fromUser?: string;

    @IsString()
    public toUser?: string;

    @IsBoolean()
    public hasLiked: string
}
