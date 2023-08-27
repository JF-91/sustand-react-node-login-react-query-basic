import { Router } from 'express'
import { loginHandler, profileHandler } from '../controllers/auth.controller'
import { requireAuth } from '../middlewares/requireAtuh'


 const router = Router()

 router.post('/login', loginHandler)
 router.get('/profile', requireAuth, profileHandler)



export default router