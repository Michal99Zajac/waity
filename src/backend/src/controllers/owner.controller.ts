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
}

export default new OwnerController()
