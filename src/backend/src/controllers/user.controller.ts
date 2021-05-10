import express, { Request, Response} from 'express'
import { User } from '../entities/user.entity'
import conn from '../db'


class UserController {
  /**
   * get all users from database
   * 
   * @param req HTTP Request
   * @param res HTTP Response
   */
  async getUsers(req: Request, res: Response) {
    const users = await conn().getRepository(User).find()

    res.status(200).json(users)
  }
}

export default new UserController()
