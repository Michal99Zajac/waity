import { CommonController } from './common/common-controler.controller'
import { Request, Response } from 'express'

export class UserController extends CommonController {
  public getUser(req: Request, res: Response) {
    res.status(200).json({
      name: "User",
      surname: "Random",
      email: "user@user.com"
    })
  }
}