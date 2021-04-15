import { CommonRouter } from './common/common-router.routers'
import { UserController } from '../controllers/user.controller'

export class UserRouter extends CommonRouter {
  controller: UserController

  constructor() {
    super()
    this.controller = new UserController()
  }
  
  public routes() {
    this.router.get('/users', this.controller.getUser)

    return this.router
  }
}
