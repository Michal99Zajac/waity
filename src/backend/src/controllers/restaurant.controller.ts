import { Request, Response, NextFunction } from 'express'
import { BadRequest } from 'http-errors'
import { validate, ValidationError } from 'class-validator'
import conn from '../db'
import { RestaurantRepository } from '../repositories/restaurant.repository'
import { Owner } from '../entities/owner.entity'
import { Address } from '../entities/address.entity'
import { Restaurant } from '../entities/restaurant.entity'
import { Phone } from '../entities/phone.entity'
import { RestaurantDetail } from '../entities/restaurant-detail.entity'
import { RestaurantCategory } from '../entities/restaurant-category.entity'


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

  /**
   * post restaurant with all information
   */
  async postAllRestaurant(req: Request, res: Response, next: NextFunction) {
    const connection = conn()

    // get created entities
    const restaurant =  await connection.getRepository(Restaurant).findOne({ id: req.body.id })
    const restaurantCategory = await connection.getRepository(RestaurantCategory).findOne({ name: req.body.category })

    // get repositories to create new entities
    const addressRepository = connection.getRepository(Address)
    const ownerRepository = connection.getRepository(Owner)
    const phoneRepository = connection.getRepository(Phone)
    const restaurantDetailRepository = connection.getRepository(RestaurantDetail)

    let ownerAddress = addressRepository.create({
      country: req.body.owner.address.country,
      city: req.body.owner.address.city,
      postalcode: req.body.owner.address.postalcode,
      addr: req.body.owner.address.addr
    })

    let ownerPhone = phoneRepository.create({
      country: req.body.owner.phone.country,
      number: req.body.owner.phone.number
    })

    let restaurantAddress = addressRepository.create({
      country: req.body.address.country,
      city: req.body.address.city,
      postalcode: req.body.address.postalcode,
      addr: req.body.address.addr
    })

    let restaurantPhone = phoneRepository.create({
      country: req.body.phone.country,
      number: req.body.phone.number
    })

    // start transaction
    try {
      await connection.transaction(async transactionManager => {
        ownerAddress = await transactionManager.save(ownerAddress)
        ownerPhone = await transactionManager.save(ownerPhone)
        restaurantAddress = await transactionManager.save(restaurantAddress)
        restaurantPhone = await transactionManager.save(restaurantPhone)

        const owner =  ownerRepository.create({
          name: req.body.owner.name,
          lastname: req.body.owner.lastname,
          email: req.body.owner.email,
          restaurant: restaurant,
          address: ownerAddress,
          phone: ownerPhone
        })
    
        const restaurantDetail = restaurantDetailRepository.create({
          restaurant: restaurant,
          restaurantCategory: restaurantCategory,
          phone: restaurantPhone,
          address: restaurantAddress,
          email: req.body.email,
          website: req.body.website,
          name: req.body.name
        })

        await validate(owner).then((err: ValidationError[]) => {
          if (err.length > 0) {
            return Promise.reject(err)
          }
        })
  
        await validate(restaurantDetail).then((err: ValidationError[]) => {
          if (err.length > 0) {
            return Promise.reject(err)
          }
        })

        await transactionManager.save(owner)
        await transactionManager.save(restaurantDetail)
      })

      res.status(201).json({
        message: 'restaurant was created'
      })

    } catch (err) {
      next(new BadRequest(err))
    }
  }
}

export default new RestaurantController()
