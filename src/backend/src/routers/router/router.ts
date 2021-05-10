import { Router as ExpressRouter } from 'express'
import Controller from '../../controllers/controller/controller'


export default abstract class Router {
  _router: ExpressRouter
  abstract controller: Controller

  constructor() {
    this._router = ExpressRouter()
  }

  abstract get router(): ExpressRouter
}
