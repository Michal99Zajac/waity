import express from 'express'
import Router from './routers/router/router'


export class App {
  app: express.Application;

  constructor(routers: any[], middlewares?: any[]) {
    this.app = express()

    this.initMiddlewares(middlewares)
    this.initRouters(routers)
  }

  initMiddlewares(middlewares?: any[]) {
    middlewares?.forEach((middleware) => {
      this.app.use('/api', middleware)
    })
  }

  initRouters(routers: Router[]) {
    routers.forEach((router) => {
      this.app.use('/api', router.router)
    })
  }

  listen(port: number, host: string, message: string) {
    this.app.listen(port, host, () => {
      console.log(message)
    })
  }
}
