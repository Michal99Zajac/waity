import { Request, Response, NextFunction } from 'express'
import conn from '../db'
import { RestaurantRepository } from '../repositories/restaurant.repository'
import { Restaurant } from '../entities/restaurant.entity'


class RestaurantController {
  async getRestaurantInfo(req: Request, res: Response, next: NextFunction) {
    const restaurant = await conn().getCustomRepository(RestaurantRepository).getOneWithDetail(req.params.id)

    res.status(200).json(restaurant)
  }

  async getRestaurants(req: Request, res: Response, next: NextFunction) {
    const restaurants = await conn().getCustomRepository(RestaurantRepository).getManyBasicByCategory(req.params.category)

    res.status(200).json(restaurants)
  }
}

export default new RestaurantController()
