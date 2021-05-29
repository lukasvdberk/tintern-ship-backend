import {IsBoolean, IsString} from "class-validator";
import {Trim} from "class-sanitizer";

export class LikesDTO{
    @IsString()
    public fromUser?: string;

    @IsString()
    public toUser?: string;

    @IsBoolean()
    public hasLiked: string
}
