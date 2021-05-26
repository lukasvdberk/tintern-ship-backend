import * as express from "express";

const internRouter = express.Router();
internRouter.get("/interns/user/:userId");
internRouter.post("/interns/user/:userId");
internRouter.put("/interns/:internId");

export { internRouter };
