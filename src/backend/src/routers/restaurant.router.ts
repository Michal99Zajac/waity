import { Router } from 'express'
import restaurantController from '../controllers/restaurant.controller'


const router = Router()

router.get('/restaurants/:id/info', restaurantController.getRestaurantInfo)

router.get('/restaurants/:category', restaurantController.getRestaurants)

export default router
