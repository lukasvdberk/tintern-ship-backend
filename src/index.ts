import * as express from 'express';
import * as dotenv from 'dotenv';

dotenv.config()

const index = express();
const port = process.env.PORT || 8080;

index.get( "/", (req, res ) => {
    res.send( "Hello world!" );
} );

index.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );
