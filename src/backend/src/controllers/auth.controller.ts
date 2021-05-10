import express, { Request, Response } from 'express'
import jwt from 'jsonwebtoken'


class AuthController {
  /**
   * login to the app and get jwt
   * 
   * @param req HTTP Request
   * @param res HTTP Response
   */
  postLogin(req: Request, res: Response) {
    const user: any = req.body

    res.json({
      accessToken: jwt.sign({ sub: user.id }, process.env.JWT_SECRET || 'secret')
    })
  }
}

export default new AuthController()
