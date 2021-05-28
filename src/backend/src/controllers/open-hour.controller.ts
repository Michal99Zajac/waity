import { Request, Response, NextFunction } from 'express'
import { BadRequest } from 'http-errors'
import { validate, ValidationError } from 'class-validator'
import { sortByDay } from '../functions/sortByDay'
import conn from '../db'
import { OpenHour } from '../entities/open-hour.entity'
import { Restaurant } from '../entities/restaurant.entity'
import { classToPlain } from 'class-transformer'


class OpenHourController {
  /**
   * post array of open-hours if any open-hour exist
   */
  async postOpenHours(req: Request, res: Response, next: NextFunction) {
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

  /**
   * post single open-hour if doesnt exist
   */
  async postOpenHour(req: Request, res: Response, next: NextFunction) {
    const connection = conn()

    // get restaurant to set openHour
    const restaurant: any = req.user instanceof Restaurant ?
      await connection.getRepository(Restaurant).findOne({ id: req.user.id }) :
      next(new BadRequest('restaurant not found'))

    const openHourRepository = connection.getRepository(OpenHour)

    // check if openhours exist for restaurant
    try {
      req.user instanceof Restaurant && await openHourRepository.findOne({
        where: {
          restaurant: {
            id: req.user.id
          },
          day: req.body.day
        }
      }).then(restaurantOpenHour => { if (restaurantOpenHour) { return Promise.reject('restaurant on this day have open hour') }})
    } catch (err) {
      return next(new BadRequest(err))
    }

    // create new openHour and response
    try {
      const openHour = new OpenHour()
      openHour.day = req.body.day
      openHour.start = req.body.start
      openHour.end = req.body.end
      openHour.restaurant = restaurant

      await validate(openHour).then((err: ValidationError[]) => {
        if (err.length > 0) { return Promise.reject(err) }
      })

      await openHourRepository.save(openHour)

      res.status(200).json(classToPlain(openHour, { excludeExtraneousValues: true }))
    } catch (err) {
      return next(new BadRequest(err))
    }
  }

  /**
   * update single open hour
   */
  async updateOpenHour(req: Request, res: Response, next: NextFunction) {
    const openHourRepository = conn().getRepository(OpenHour)

    // get open hour from database
    const openHour = req.user instanceof Restaurant && await openHourRepository.findOne({
      where: {
        day: req.body.day,
        restaurant: {
          id: req.user.id
        }
      }
    })

    // check if openHour exist
    if (!openHour) return next(new BadRequest('open hour doesnt exist'))

    openHour.start = req.body.start
    openHour.end = req.body.end

    // check and save changed open-hour
    try {
      await validate(openHour).then((err: ValidationError[]) => {
        if (err.length > 0) return Promise.reject(err)
      })

      await openHourRepository.save(openHour)

      res.status(200).json(openHour)
    } catch (err) {
      return next(new BadRequest(err))
    }
  }

  /**
   * get restaurant openhours sort by day
   */
  async getOpenHours(req: Request, res: Response, next: NextFunction) {
    // get open hours
    const openHours = await conn().getRepository(OpenHour).find({
      where: {
        restaurant: {
          id: req.params.restaurantId
        }
      }
    })

    res.status(200).json(openHours.sort(sortByDay))
  }

  /**
   * patch all restaurant openHours
   */
  async patchOpenHours(req: Request, res: Response, next: NextFunction) {
    const openHourRepository = conn().getRepository(OpenHour)

    // check if restaurant is logged and can user req.user.id
    if (!(req.user instanceof Restaurant)) return next(new BadRequest('restaurant must be logged'))
    
    // find restaurant open-hours
    const openHours = await openHourRepository.find({
      where: {
        restaurant: {
          id: req.user.id
        }
      }
    })

    // check if restaurant have open-hours to update
    if (openHours.length <= 0) return next(new BadRequest('restaurant doesnt have any open hours'))

    // update open-hours
    for (let openHour of openHours) {
      for (let newOpenHour of req.body) {
        if (openHour.day === newOpenHour.day) {
          openHour.start = newOpenHour.start
          openHour.end = newOpenHour.end
        }
      }
    }

    // save changes
    try {
      await openHourRepository.save(openHours)

      res.status(200).json(openHours.sort(sortByDay))
    } catch (err) {
      return next(new BadRequest(err))
    }
  }
}

export default new OpenHourController()
