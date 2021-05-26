import * as express from 'express';

const likesRouter = express.Router()
likesRouter.get('/likes/user/:userId')
likesRouter.post('/likes/from/:userId/to-user/:userId')

export { likesRouter }
