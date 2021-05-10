import express, { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import passport from '../passport'


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

      console.log(user)

      if (user.email) {
        res.json({
          accessToken: jwt.sign({ sub: user.email }, process.env.JWT_SECRET || 'secret')
        })
      }
    })(req, res, next)
  }

}

export default new AuthController()
