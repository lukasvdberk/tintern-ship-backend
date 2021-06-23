export declare class PasswordUtil {
    static hashPassword(password: string): Promise<string>;
    static validPassword(password: any, hash: any): Promise<boolean>;
}
