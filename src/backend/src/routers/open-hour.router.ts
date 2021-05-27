import { Router } from 'express'
import passport from '../passport'
import { guard } from '../middlewares/guard.mid'
import openHourController from '../controllers/open-hour.controller'


const router = Router()

router.post('/open-hours', passport.authenticate('restaurant-jwt'), guard(['restaurant']), openHourController.postOpenHours)

router.post('/open-hour', passport.authenticate('restaurant-jwt'), guard(['restaurant']), openHourController.postOpenHour)

export default router
