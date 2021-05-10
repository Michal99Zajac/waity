import { Router } from 'express'
import passport from '../passport'
import authController from '../controllers/auth.controller'


const router = Router()

router.post('/auth/login', authController.postLogin)

export default router
