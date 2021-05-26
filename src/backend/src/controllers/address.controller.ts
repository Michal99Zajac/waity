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

        connection.getRepository(Address).save(address)
      }

      res.status(200).json({
        message: 'restaurant address was updated'
      })

    } catch (err) {
      next(new BadRequest(err))
    }
  }
}

export default new AddressController()