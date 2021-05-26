import * as express from 'express';

const authRouter = express.Router()
authRouter.post('/auth/login')
authRouter.post('/auth/register')

export { authRouter }
