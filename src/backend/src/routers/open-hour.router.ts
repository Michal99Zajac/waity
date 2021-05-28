import { Router } from 'express'
import passport from '../passport'
import { guard } from '../middlewares/guard.mid'
import openHourController from '../controllers/open-hour.controller'


const router = Router()

router.post('/open-hours', passport.authenticate('restaurant-jwt'), guard(['restaurant']), openHourController.postOpenHours)

router.post('/open-hour', passport.authenticate('restaurant-jwt'), guard(['restaurant']), openHourController.postOpenHour)

router.put('/open-hour', passport.authenticate('restaurant-jwt'), guard(['restaurant']), openHourController.updateOpenHour)

router.get('/open-hours/:restaurantId', passport.authenticate(['restaurant-jwt', 'user-jwt']), guard(['client', 'restaurant']), openHourController.getOpenHours)

router.patch('/open-hours', passport.authenticate('restaurant-jwt'), guard(['restaurant']), openHourController.patchOpenHours)

export default router
