export declare class AuthorizationUtil {
    static getJWTKey(): string;
    static createJWT(userId: string, email: string): Promise<string>;
    static extractJWTInformation(jwtToken: string): {
        email: any;
        userId: any;
    };
}
