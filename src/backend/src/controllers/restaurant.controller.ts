import { Request, Response, NextFunction } from 'express'
import conn from '../db'
import { RestaurantRepository } from '../repositories/restaurant.repository'


class RestaurantController {
  /**
   * get restaurant by id with all the details
   */
  async getRestaurantInfo(req: Request, res: Response, next: NextFunction) {
    const restaurant = await conn().getCustomRepository(RestaurantRepository).getOneWithDetail(req.params.id)

    res.status(200).json(restaurant)
  }

  /**
   * get restaurants with basic informations by category
   */
  async getRestaurantsByCategory(req: Request, res: Response, next: NextFunction) {
    const restaurants = await conn().getCustomRepository(RestaurantRepository).getManyByCategory(req.params.category)

    res.status(200).json(restaurants)
  }

  /**
   * get all restaurants with basic informations
   */
  async getRestaurants(req: Request, res: Response, next: NextFunction) {
    const restaurants = await conn().getCustomRepository(RestaurantRepository).getMany()

    res.status(200).json(restaurants)
  }
}

export default new RestaurantController()
