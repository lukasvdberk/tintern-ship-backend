import * as express from 'express';
import * as dotenv from 'dotenv';
import {routesManager} from "./routes/routesManager";
import * as mongoose from 'mongoose';
import * as bodyParser from 'body-parser';
import * as morgan from 'morgan'
dotenv.config()
// http request logger
morgan('tiny')

const app = express();

const port = process.env.PORT || 8080;

mongoose.connect(process.env.MONGOOSE_CONN, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log('connected to database!')
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/json' }));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");

    next();
});

app.use('', routesManager)

app.listen(port);
