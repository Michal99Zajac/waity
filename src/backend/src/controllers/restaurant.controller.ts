import { Request, Response, NextFunction } from 'express'
import { BadRequest } from 'http-errors'
import { validate, ValidationError } from 'class-validator'
import conn from '../db'
import { RestaurantRepository } from '../repositories/restaurant.repository'
import { Owner } from '../entities/owner.entity'
import { Address } from '../entities/address.entity'
import { Restaurant } from '../entities/restaurant.entity'
import { RestaurantPhone } from '../entities/restaurant-phone.entity'
import { OwnerPhone } from '../entities/owner-phone.entity'
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
   * delete restaurant with they phone number
   */
  // async deleteRestaurant(req: Request, res: Response, next: NextFunction) {
  //   const connection = conn()

  //   // get repositories
  //   // let phoneRepository = await connection.getRepository(Phone)
  //   let restaurantRepository = await connection.getRepository(Restaurant)

  //   phoneRepository.delete({ })
  // }

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
    const restaurantPhoneRepository = connection.getRepository(RestaurantPhone)
    const ownerPhoneRepository = connection.getRepository(OwnerPhone)
    const restaurantDetailRepository = connection.getRepository(RestaurantDetail)

    let ownerAddress = addressRepository.create({
      country: req.body.owner.address.country,
      city: req.body.owner.address.city,
      postalcode: req.body.owner.address.postalcode,
      addr: req.body.owner.address.addr
    })

    let restaurantAddress = addressRepository.create({
      country: req.body.address.country,
      city: req.body.address.city,
      postalcode: req.body.address.postalcode,
      addr: req.body.address.addr
    })

    let restaurantPhone = restaurantPhoneRepository.create({
      country: req.body.phone.country,
      number: req.body.phone.number,
      restaurant: restaurant
    })

    // start transaction
    try {
      await connection.transaction(async transactionManager => {
        ownerAddress = await transactionManager.save(ownerAddress)
        restaurantAddress = await transactionManager.save(restaurantAddress)
        restaurantPhone = await transactionManager.save(restaurantPhone)

        let owner = ownerRepository.create({
          name: req.body.owner.name,
          lastname: req.body.owner.lastname,
          email: req.body.owner.email,
          restaurant: restaurant,
          address: ownerAddress,
        })
    
        const restaurantDetail = restaurantDetailRepository.create({
          restaurant: restaurant,
          restaurantCategory: restaurantCategory,
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

        await transactionManager.save(restaurantDetail)
        owner = await transactionManager.save(owner)

        let ownerPhone = ownerPhoneRepository.create({
          country: req.body.owner.phone.country,
          number: req.body.owner.phone.number,
          owner: owner
        })

         await transactionManager.save(ownerPhone)
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
