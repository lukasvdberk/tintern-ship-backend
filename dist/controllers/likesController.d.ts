export declare class LikesController {
    static saveLike(req: any, res: any, next: any): Promise<any>;
    static getLikes(req: any, res: any, next: any): Promise<any>;
    static getLikesByUserId(userId: any, res: any, next: any): Promise<any>;
    static deleteLike(likeId: any): Promise<void>;
}
