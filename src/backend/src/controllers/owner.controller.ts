import { Request, Response, NextFunction} from 'express'
import { BadRequest } from 'http-errors'
import conn from '../db'
import { Owner } from '../entities/owner.entity'
import { Restaurant } from '../entities/restaurant.entity'


class OwnerController {
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
}

export default new OwnerController()
