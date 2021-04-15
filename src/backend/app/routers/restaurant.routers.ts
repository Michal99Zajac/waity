import { CommonRouter } from './common/common-router.routers'
import { RestaurantController } from '../controllers/restaurant.controller'

export class RestaurantRouter extends CommonRouter {
  controller: RestaurantController

  constructor() {
    super()
    this.controller = new RestaurantController()
  }
  
  public routes() {
    this.router.get('/restaurants', this.controller.getRestaurant)

    return this.router
  }
}