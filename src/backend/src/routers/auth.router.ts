import { Router } from 'express'
import { guard } from '../middlewares/guard.mid'
import passport from '../passport'
import authController from '../controllers/auth.controller'


const router = Router()

router.post('/auth/login', authController.postLoginUser)

router.post('/auth/register', authController.postRegisterUser)

router.post('/auth/restaurant/login', authController.postLoginRestaurant)

router.post('/auth/restaurant/register', authController.postRegisterRestaurant)

router.put('/auth/restaurant/password', passport.authenticate('restaurant-jwt'), guard(['restaurant']), authController.updateRestaurantPassword)

export default router
