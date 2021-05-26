import { Router } from 'express'
import passport from '../passport'
import { guard } from '../middlewares/guard.mid'
import addressController from '../controllers/address.controller'


const router = Router()

router.put('/addresses/restaurant', passport.authenticate('restaurant-jwt'), guard(['restaurant']), addressController.updateRestaurantAddress)

router.get('/addresses/restaurant/:id', passport.authenticate('restaurant-jwt'), guard(['restaurant', 'client']), addressController.getRestaurantAddress)

export default router
