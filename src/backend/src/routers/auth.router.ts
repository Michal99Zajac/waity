import { Router } from 'express'
import { guard } from '../middlewares/guard.mid'
import passport from '../passport'
import authController from '../controllers/auth.controller'


const router = Router()

router.post('/auth/login', authController.postLoginUser)

router.post('/auth/register', authController.postRegisterUser)

router.put('/auth/password', passport.authenticate('user-jwt'), guard(['client']), authController.updateUserPassword)

router.post('/auth/restaurant/login', authController.postLoginRestaurant)

router.post('/auth/restaurant/register', authController.postRegisterRestaurant)

router.put('/auth/restaurant/password', passport.authenticate('restaurant-jwt'), guard(['restaurant']), authController.updateRestaurantPassword)

router.get('/auth/user', passport.authenticate(['user-jwt', 'restaurant-jwt']), authController.getSelfwithRole)

export default router
