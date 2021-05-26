import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import { BadRequest } from 'http-errors'
import { validate, ValidationError } from 'class-validator'
import { classToPlain } from 'class-transformer'
import bcrypt from 'bcrypt'
import saltRounds from '../bcrypt.config'
import passport from '../passport'
import conn from '../db'
import { User } from '../entities/user.entity'
import { Role } from '../entities/role.entity'
import { Restaurant } from '../entities/restaurant.entity'


/**
 * Controller for user auth
 */
class AuthController {
  /**
   * login USER to the app and get jwt. Request body bust have:
   * - email (string)
   * - password (string)
   * 
   * @param req HTTP Request
   * @param res HTTP Response
   * @param next Express NextFunction
   */
  async postLoginUser(req: Request, res: Response, next: NextFunction) {
    passport.authenticate('user-local', (err, user, info) => {
      if (err) { return next(err) }

      if (!user) {
        return res.status(401).json({
          message: info.message
        })
      }

      if (user.email) {
        res.json({
          accessToken: jwt.sign({ sub: user.email }, process.env.JWT_SECRET || 'secret')
        })
      }
    })(req, res, next)
  }

  /**
   * register and create new USER. Request body must have:
   * - email (string)
   * - password (string)
   * 
   * @param req HTTP Request
   * @param res HTTP Response
   * @param next Express NextFunction
   */
  async postRegisterUser(req: Request, res: Response, next: NextFunction) {
    const role = await conn().getRepository(Role).findOne({ name: 'client' }) || await ( async () => { 
      const role = new Role()
      role.name = 'client'
      role.desc = 'normal client with all basic permisions on app'
  
      await conn().getRepository(Role).save(role)

      return role
    })()

    const repository = await conn().getRepository(User)
    const user = repository.create({
      email: req.body.email,
      password: req.body.password,
      roles: [role]
    })

    try {
      await validate(user).then((err: ValidationError[]) => {
        if (err.length > 0) {
          return Promise.reject(err)
        }
      })

      user.password = await bcrypt.hash(user.password, saltRounds)

      await conn().manager.save(user)

      res.status(201).json(classToPlain(user, { excludeExtraneousValues: true }))
    } catch (err) {
      next(new BadRequest(err))
    }
  }

  /**
   * login RESTAURANT to the app and get jwt. Request body must have:
   * - passcode (string)
   * - password (string)
   * 
   * @param req HTTP Request
   * @param res HTTP Response
   * @param next Express NextFunction
   */
   async postLoginRestaurant(req: Request, res: Response, next: NextFunction) {
    passport.authenticate('restaurant-local', (err, restaurant, info) => {
      if (err) { return next(err) }

      if (!restaurant) {
        return res.status(401).json({
          message: info.message
        })
      }

      if (restaurant.passcode) {
        res.json({
          accessToken: jwt.sign({ sub: restaurant.passcode }, process.env.JWT_SECRET || 'secret')
        })
      }
    })(req, res, next)
  }

  /**
   * register and create new RESTAURANT. Request body must have:
   * - tin (string)
   * - password (string)
   * 
   * @param req HTTP Request
   * @param res HTTP Response
   * @param next Express NextFunction
   */
   async postRegisterRestaurant(req: Request, res: Response, next: NextFunction) {
    const role = await conn().getRepository(Role).findOne({ name: 'restaurant' }) || await ( async () => { 
      const role = new Role()
      role.name = 'restaurant'
      role.desc = 'restaurant role with all permissions and abilities for restaurant'
  
      await conn().getRepository(Role).save(role)

      return role
    })()

    // create repository for database operations
    const repository = await conn().getRepository(Restaurant)

    // generate passcode and check if passcode is available
    let passcode = (Math.floor(1000000 + Math.random() * 9000000)).toString()
    while (true) {
      const available = await repository.findOne({ passcode: passcode })

      if (!available) { break }

      // if not available gen passcode once again
      passcode = (Math.floor(1000000 + Math.random() * 9000000)).toString()
    }

    const restaurant = repository.create({
      passcode: passcode,
      TIN: req.body.tin,
      password: req.body.password,
      role: role
    })

    try {
      await validate(restaurant).then((err: ValidationError[]) => {
        if (err.length > 0) {
          return Promise.reject(err)
        }
      })

      restaurant.password = await bcrypt.hash(restaurant.password, saltRounds)

      await repository.save(restaurant)

      res.status(201).json(classToPlain(restaurant, { excludeExtraneousValues: true }))
    } catch (err) {
      next(new BadRequest(err))
    }
  }

  /**
   * change restaurant password
   */
  async updateRestaurantPassword(req: Request, res: Response, next: NextFunction) {
    const connection = conn()

    if (req.body.newpassword != req.body.repeatNewpassword) return next(new BadRequest('new passwords are not match'))

    const restaurant = req.user instanceof Restaurant ?
      await connection.getRepository(Restaurant).findOne({ id: req.user.id }, { select: ['password', 'passcode', 'id', 'TIN'] }) :
      next(new BadRequest())

    if (restaurant) {
      const same = await bcrypt.compare(req.body.password, restaurant.password)

      if (!same) return next(new BadRequest('passwords is not match'))

      restaurant.password = req.body.newpassword

      try {
        await validate(restaurant).then((err: ValidationError[]) => {
          if (err.length > 0) {
            return Promise.reject(err)
          }
        })

        restaurant.password = await bcrypt.hash(req.body.newpassword, saltRounds)

        await connection.manager.save(restaurant)

        res.status(200).json({
          message: 'password was updated'
        })

      } catch (err) {
        next(new BadRequest(err))
      }
    }
  }
}

export default new AuthController()
