export declare class CompanyController {
    static createCompany(req: any, res: any, next: any): Promise<any>;
    static editCompany(req: any, res: any, next: any): Promise<void>;
    static deleteCompany(req: any, res: any, next: any): Promise<any>;
    static getAllCompanies(req: any, res: any, next: any): Promise<void>;
    static getCompany(req: any, res: any, next: any): Promise<void>;
    static getCompanyById(req: any, res: any, next: any): Promise<void>;
    static addInternShipJobToCompany(req: any, res: any, next: any): Promise<any>;
    static getInternShipProjectOfCompany(req: any, res: any, next: any): Promise<any>;
    static getFittingInternshipProjects(req: any, res: any, next: any): Promise<any>;
}
