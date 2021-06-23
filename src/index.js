"use strict";
exports.__esModule = true;
var express = require("express");
var dotenv = require("dotenv");
var routesManager_1 = require("./routes/routesManager");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var morgan = require("morgan");
var fileUpload = require("express-fileupload");
var path = require("path");
dotenv.config();
// http request logger
morgan("tiny");
var app = express();
var port = process.env.PORT || 8080;
mongoose.connect(process.env.MONGOOSE_CONN, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}, function () {
    console.log("connected to database!");
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: "application/json" }));
// enable files upload
app.use(fileUpload({
    createParentPath: true
}));
app.use(express.static(path.join(process.cwd(), 'public')));
app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
    next();
});
app.use("", routesManager_1.routesManager);
app.listen(port);
