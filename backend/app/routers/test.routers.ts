import { CommonRouter } from './common/common-router.routers'
import { TestController } from '../controllers/test.controller'

export class TestRouter extends CommonRouter {
  controller: TestController

  constructor() {
    super()
    this.controller = new TestController()
  }

  public routes() {
    this.router.get('/tests', this.controller.getTests)

    this.router.get('/tests/:id', this.controller.getTest)

    this.router.post('/tests', this.controller.addTest)

    return this.router
  }
}
