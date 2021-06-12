import {IsString} from "class-validator";

export class FirebaseDeviceDTO {
    @IsString()
    token: string;
}
