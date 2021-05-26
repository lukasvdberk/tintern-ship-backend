import * as express from 'express';
import * as dotenv from 'dotenv';
import {routesManager} from "./routes/routesManager";
import * as json from 'body-parser';
import * as mongoose from 'mongoose';

dotenv.config()

const app = express();

const port = process.env.PORT || 8080;

mongoose.connect('mongodb+srv://dev:cutiexx@cluster0.o4y0u.mongodb.net/myFirstDatabase', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log('connected to database!')
});


app.use(json())

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
  
    next();
});

app.use(routesManager)

app.listen(port);
