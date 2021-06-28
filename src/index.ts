import * as express from "express";
import * as dotenv from "dotenv";
import { routesManager } from "./routes/routesManager";
import * as mongoose from "mongoose";
import * as bodyParser from "body-parser";
import * as morgan from "morgan";
import * as fileUpload from "express-fileupload";
import * as path from "path";
import * as expressOasGenerator from 'express-oas-generator';
import * as _ from 'lodash'
import {SPEC_OUTPUT_FILE_BEHAVIOR} from "express-oas-generator";

dotenv.config();
// http request logger
morgan("tiny");

const modelNames = mongoose.modelNames();
const app = express();


const port = process.env.PORT || 8080;

mongoose.connect(
  process.env.MONGOOSE_CONN,
  {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("connected to database!");
  }
);

// generate swagger documentation
expressOasGenerator.handleResponses(app, {
    specOutputPath: './api-spec-3.json',
    mongooseModels: modelNames,
    alwaysServeDocs: true,
    ignoredNodeEnvironments: [],
    swaggerDocumentOptions: {
        customCss: '.swagger-ui { color: #42347A }'
    },
    specOutputFileBehavior: SPEC_OUTPUT_FILE_BEHAVIOR.PRESERVE,
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: "application/json" }));
// enable files upload
app.use(fileUpload({
    createParentPath: true
}));

app.use(express.static(path.join(process.cwd(), 'public')));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );

  next();
});

expressOasGenerator.handleRequests();
app.use("", routesManager);

app.listen(port, () => {
    console.log(`Server started. Checkout docs http://localhost:${port}/api-docs`)
});
