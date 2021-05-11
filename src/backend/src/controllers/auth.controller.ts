import express, { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import { BadRequest } from 'http-errors'
import { validate, ValidationError } from 'class-validator'
import passport from '../passport'
import conn from '../db'
import { User } from '../entities/user.entity'


/**
 * Controller for user auth
 */
class AuthController {
  /**
   * login to the app and get jwt
   * 
   * @param req HTTP Request
   * @param res HTTP Response
   * @param next Express NextFunction
   */
  async postLogin(req: Request, res: Response, next: NextFunction) {
    passport.authenticate('local', (err, user, info) => {
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
   * register and create new user 
   * 
   * @param req HTTP Request
   * @param res HTTP Response
   * @param next Express NextFunction
   */
  async postRegister(req: Request, res: Response, next: NextFunction) {
    const repository = await conn().getRepository(User)
    const user = repository.create({
      email: req.body.email,
      password: req.body.password
    })

    try {
      await validate(user).then((err: ValidationError[]) => {
        if (err.length > 0) {
          return Promise.reject(err)
        }
      })

      await repository.save(user)

      res.status(201).json(user)
    } catch (err) {
      next(new BadRequest(err))
    }
  }
}

export default new AuthController()
