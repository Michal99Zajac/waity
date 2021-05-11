import { Request, Response} from 'express'
import { classToPlain } from 'class-transformer'
import conn from '../db'
import { User } from '../entities/user.entity'


class UserController {
  /**
   * get all users from database
   * 
   * @param req HTTP Request
   * @param res HTTP Response
   */
  async getUsers(req: Request, res: Response) {
    const users = await conn().getRepository(User).find()

    res.status(200).send(classToPlain(users, { excludeExtraneousValues: true }))
  }
}

export default new UserController()
