import { Request, Response, NextFunction } from 'express'
import { BadRequest } from 'http-errors'
import conn from '../db'
import { AddressRepository } from '../repositories/address.repository'
import { Restaurant } from '../entities/restaurant.entity'
import { Address } from '../entities/address.entity'


class AddressController {
  /**
   * update restaurant address 
   */
  async updateRestaurantAddress(req: Request, res: Response, next: NextFunction) {
    const connection = conn()
    let address

    if (req.user instanceof Restaurant)
      address = await connection.getCustomRepository(AddressRepository).getOneByRestaurantId(req.user.id)

    try {
      if (address) {
        address.postalcode = req.body.postalcode
        address.country = req.body.country
        address.city = req.body.city
        address.addr = req.body.address

        address = await connection.getRepository(Address).save(address)
      }

      res.status(200).json({
        message: 'restaurant address was updated',
        ...address
      })

    } catch (err) {
      next(new BadRequest(err))
    }
  }

  /**
   * get restaurant address by id
   */
  async getRestaurantAddress(req: Request, res: Response, next: NextFunction) {
    const connection = conn()

    const address = req.user instanceof Restaurant ?
      await connection.getCustomRepository(AddressRepository).getOneByRestaurantId(req.params.id) :
      next(new BadRequest())

    res.status(200).json(address)
  }
}

export default new AddressController()