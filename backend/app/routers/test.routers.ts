import express, { Router, Request, Response } from 'express'
import { TestController } from '../controllers/test.controller'

export class TestRoutes {
  testController: TestController
  _routes: Router

  constructor() {
    this._routes = express.Router()
    this.testController = new TestController()
  }

  public routes(): Router {
    this._routes.get('/tests', this.testController.getTests)

    this._routes.get('/tests/:id', this.testController.getTest)

    this._routes.post('/tests', this.testController.addTest)

    return this._routes
  }
}
