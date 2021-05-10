import { Router } from 'express'
import userController from '../controllers/user.controller'
import passport from '../passport'


const router = Router()

router.get('/users', passport.authenticate('jwt'), userController.getUsers)

export default router
