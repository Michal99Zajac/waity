import Router from './router/router'
import UserController from '../controllers/user.controller'


export default class UserRouter extends Router {
  controller: UserController

  constructor() {
    super()
    this.controller = new UserController()
  }

  get router() {
    this._router.get('/user', this.controller.getUser)

    this._router.post('/user', this.controller.postUser)

    return this._router
  }
}
