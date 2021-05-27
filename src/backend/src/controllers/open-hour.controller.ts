import { Request, Response, NextFunction } from 'express'
import { BadRequest } from 'http-errors'
import { validate, ValidationError } from 'class-validator'
import conn from '../db'
import { OpenHour } from '../entities/open-hour.entity'
import { Restaurant } from '../entities/restaurant.entity'
import { classToPlain } from 'class-transformer'


class OpenHourController {
  /**
   * add open hour to the database for concreate restaurant
   */
  async postOpenHour(req: Request, res: Response, next: NextFunction) {
    const connection = conn()

    const restaurant: any = req.user instanceof Restaurant ?
      await connection.getRepository(Restaurant).findOne({ id: req.user.id }) :
      next(new BadRequest('restaurant not found'))

    const openHourRepository = connection.getRepository(OpenHour)

    // check if openhours exist for restaurant
    try {
      req.user instanceof Restaurant && await openHourRepository.find({
        where: {
          restaurant: {
            id: req.user.id
          }
        }
      }).then(restaurantOpenHours => { if (restaurantOpenHours.length) { return Promise.reject('restaurant have open hours') }})
    } catch (err) {
      return next(new BadRequest(err))
    }

    const openHours: OpenHour[] = []

    // create OpenHours
    for (let idx in req.body) {
      try {
        let openHour = new OpenHour()
        openHour.day = req.body[idx].day
        openHour.start = req.body[idx].start
        openHour.end = req.body[idx].end
        openHour.restaurant = restaurant

        await validate(openHour).then((err: ValidationError[])  => {
          if (err.length > 0) {
            return Promise.reject(err)
          }
        })

        openHours.push(openHour)
      } catch (err) {
        return next(new BadRequest(err))
      }
    }

    // save new open hours to the database
    try {
      const newOpenHours = await openHourRepository.save(openHours)

      res.status(200).json(classToPlain(newOpenHours, { excludeExtraneousValues: true }))
    } catch (err) {
      return next(new BadRequest(err))
    }
  }
}

export default new OpenHourController()
