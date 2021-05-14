import { Router } from 'express'
import userController from '../controllers/user.controller'
import passport from '../passport'
import { guard } from '../middlewares/guard.mid'


const router = Router()

router.get('/users', passport.authenticate(['user-jwt', 'restaurant-jwt']), guard(['test']), userController.getUsers)

export default router
