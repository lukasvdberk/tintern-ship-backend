import * as express from 'express';
import * as dotenv from 'dotenv';
import {routesManager} from "./routes/routesManager";

dotenv.config()

const app = express();
const port = process.env.PORT || 8080;

app.use(routesManager)

app.listen(port);
