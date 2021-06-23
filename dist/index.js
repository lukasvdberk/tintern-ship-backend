"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const dotenv = require("dotenv");
const routesManager_1 = require("./routes/routesManager");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const fileUpload = require("express-fileupload");
const path = require("path");
dotenv.config();
morgan("tiny");
const app = express();
const port = process.env.PORT || 8080;
mongoose.connect(process.env.MONGOOSE_CONN, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, () => {
    console.log("connected to database!");
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: "application/json" }));
app.use(fileUpload({
    createParentPath: true
}));
app.use(express.static(path.join(process.cwd(), 'public')));
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
    next();
});
app.use("", routesManager_1.routesManager);
app.listen(port);
//# sourceMappingURL=index.js.map