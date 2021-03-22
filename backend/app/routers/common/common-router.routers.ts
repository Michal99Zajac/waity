import express, { Router } from 'express'
import { CommonController } from '../../controllers/common/common-controler.controller'

export abstract class CommonRouter {
  router: Router
  abstract controller: CommonController

  constructor() {
    this.router = express.Router()
  }

  abstract routes(): Router
}
