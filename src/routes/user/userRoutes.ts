import * as express from 'express';

const userRouter = express.Router()
userRouter.get('/users/me')
userRouter.post('/users/')

export { userRouter }
