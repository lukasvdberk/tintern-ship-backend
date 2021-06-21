import {IsBoolean, IsString} from "class-validator";
import {Trim} from "class-sanitizer";

export class CreateLikesDTO{
    @IsString()
    public fromUserId?: string;

    @IsString()
    public toUserId?: string;

    @IsBoolean()
    public hasLiked: string
}
