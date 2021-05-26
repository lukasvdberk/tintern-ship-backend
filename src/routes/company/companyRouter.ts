import * as express from "express";

const companyRouter = express.Router();
companyRouter.get("/companies/:userId");
companyRouter.post("/companies/user/:userId");
companyRouter.put("/companies/:companyId");

export { companyRouter };
