import { Request, Response, NextFunction} from 'express'
import { BadRequest } from 'http-errors'
import conn from '../db'
import { Owner } from '../entities/owner.entity'
import { Restaurant } from '../entities/restaurant.entity'


class OwnerController {
  /**
   * get owner basic information like name and lastname by logged restaurantID
   */
  async getOwnerBasic(req: Request, res: Response, next: NextFunction) {
    const connection = conn()

    // get owner by id logged restaurant
    const owner = req.user instanceof Restaurant ?
      await connection.getRepository(Owner).findOne({
        where: {
          restaurant: {
            id: req.user.id
          }
        }
      }) : next(new BadRequest())

    res.status(200).json(owner)
  }

  /**
   * get owner basic information with they address
   */
  async getOnwerAddress(req: Request, res: Response, next: NextFunction) {
    const connection = conn()

    // get owner with address by logged restaurant id
    const ownerWithAddress = req.user instanceof Restaurant ?
      await connection.getRepository(Owner).findOne({
        relations: ['address'],
        where: {
          restaurant: {
            id: req.user.id
          }
        }
      }) : next(new BadRequest())

    res.status(200).json(ownerWithAddress)
  }

  /**
   * get owner basic information with they phone number
   */
  async getOnwerPhone(req: Request, res: Response, next: NextFunction) {
    // get owner with phone by logged restaurant id
    const ownerWithPhone = req.user instanceof Restaurant ?
      await conn().getRepository(Owner).findOne({
        relations: ['phone'],
        where: {
          restaurant: {
            id: req.user.id
          }
        }
      }) : next(new BadRequest())

    res.status(200).json(ownerWithPhone)
  }

  /**
   * update owner basic information
   */
  async updateOwnerBasic(req: Request, res: Response, next: NextFunction) {
    const connection = conn()

    // get owner to update
    const owner = req.user instanceof Restaurant ?
      await connection.getRepository(Owner).findOne({
        where: {
          restaurant: {
            id: req.user.id
          }
        }
      }) : next(new BadRequest())

    // update owner and catch any errors
    if (owner) {
      owner.email = req.body.email
      owner.name = req.body.name
      owner.lastname = req.body.lastname

      try {
        connection.manager.save(owner)
      } catch (err) {
        next(new BadRequest(err))
      }
    }

    res.status(200).json({
      message: 'owner basic information was updated'
    })
  }

  /**
   * update owner phone
   */
  async updateOwnerPhone(req: Request, res: Response, next: NextFunction) {
    const connection = conn()

    // get owner to update
    const ownerWithPhone = req.user instanceof Restaurant ?
      await connection.getRepository(Owner).findOne({
        relations: ['phone'],
        where: {
          restaurant: {
            id: req.user.id
          }
        }
      }) : next(new BadRequest())

    // update owners phone and catch any errors
    if (ownerWithPhone) {
      const phone = ownerWithPhone.phone

      phone.country = req.body.country
      phone.number = req.body.number

      try {
        connection.manager.save(phone)
      } catch (err) {
        next(new BadRequest(err))
      }
    }

    res.status(200).json({
      message: 'owner phone was updated'
    })
  }
}

export default new OwnerController()
