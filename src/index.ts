import * as express from 'express';

const index = express();
const port = 8080; // default port to listen

// define a route handler for the default home page
index.get( "/", (req, res ) => {
    res.send( "Hello world!" );
} );

// start the Express server
index.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );
