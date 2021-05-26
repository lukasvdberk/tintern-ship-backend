import * as express from 'express';
import * as dotenv from 'dotenv';
import * as json from 'body-parser';
import * as mongoose from 'mongoose';

dotenv.config()

const index = express();

mongoose.connect('mongodb+srv://dev:cutiexx@cluster0.o4y0u.mongodb.net/myFirstDatabase', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log('connected to database!')
});


index.use(json())

index.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
  
    next();
});

const port = process.env.PORT || 8080;

index.get( "/", (req, res ) => {
    res.send( "Hello world!" );
} );

index.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );
