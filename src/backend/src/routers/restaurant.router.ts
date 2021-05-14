import { Router } from 'express'
import passport from '../passport'
import { guard } from '../middlewares/guard.mid'
import restaurantController from '../controllers/restaurant.controller'


const router = Router()

router.get('/restaurants/:id/info', passport.authenticate('user-jwt'), guard(['client']), restaurantController.getRestaurantInfo)

router.get('/restaurants/:category', passport.authenticate('user-jwt'), guard(['client']), restaurantController.getRestaurantsByCategory)

router.get('/restaurants', passport.authenticate('user-jwt'), guard(['client']), restaurantController.getRestaurants)

export default router
