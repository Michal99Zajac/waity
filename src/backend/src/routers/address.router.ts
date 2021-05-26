import { Router } from 'express'
import passport from '../passport'
import { guard } from '../middlewares/guard.mid'
import addressController from '../controllers/address.controller'


const router = Router()

router.put('/addresses/restaurant', passport.authenticate('restaurant-jwt'), guard(['restaurant']), addressController.updateRestaurantAddress)

export default router
