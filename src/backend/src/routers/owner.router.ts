import { Router } from 'express'
import passport from '../passport'
import { guard } from '../middlewares/guard.mid'
import ownerController from '../controllers/owner.controller'


const router = Router()

router.get('/owners', passport.authenticate('restaurant-jwt'), guard(['restaurant']), ownerController.getOwnerBasic)

export default router
