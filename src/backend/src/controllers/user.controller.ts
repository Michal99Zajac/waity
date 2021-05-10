import { Request, Response } from 'express'
import connection from '../db'
import { isEmpty } from '../functions/isEmpty'
import { User } from '../entities/user.entity'
import Controller from './controller/controller'


export default class UserController extends Controller {
  // GET: api/user
  getUser(req: Request, res: Response) {
    res.status(200).json({
      user: 'user'
    })
  }

  // POST: api/user
  async postUser(req: Request, res: Response) {
    const conn = await connection()
    const userRepository = conn.getRepository(User)

    const user = userRepository.create(req.body)

    if (!isEmpty(user)) {
      await userRepository.save(user)

      res.status(201).json({
        message: 'create new user'
      })
    } else {
      res.status(400).json({})
    }

    await conn.close()
  }
}
