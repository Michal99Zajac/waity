import { Router } from 'express'
import passport from '../passport'
import { guard } from '../middlewares/guard.mid'
import restaurantController from '../controllers/restaurant.controller'


const router = Router()

router.get('/restaurants/info/:id', passport.authenticate('user-jwt'), guard(['client']), restaurantController.getRestaurantInfo)

router.get('/restaurants/:category', passport.authenticate('user-jwt'), guard(['client']), restaurantController.getRestaurantsByCategory)

router.get('/restaurants', passport.authenticate('user-jwt'), guard(['client']), restaurantController.getRestaurants)

router.post('/restaurants', restaurantController.postAllRestaurant)

router.delete('/restaurants', passport.authenticate('restaurant-jwt'), guard(['restaurant']), restaurantController.deleteRestaurant)

router.put('/restaurants/information', passport.authenticate('restaurant-jwt'), guard(['restaurant']), restaurantController.updateRestaurantInfo)

router.put('/restaurants/contact', passport.authenticate('restaurant-jwt'), guard(['restaurant']), restaurantController.updateRestaurantContact)

export default router
