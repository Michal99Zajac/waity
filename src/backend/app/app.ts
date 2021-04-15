import express from 'express'

export class App {
  public app: express.Application

  constructor(routers: any[], middlewares: any[]) {
    this.app = express()

    this.initMiddlewares(middlewares);
    this.initRoutes(routers);
  }

  public listen(port: number, host: string, message: string) {
    this.app.listen(port, () => {
      console.log(message)
    })
  }

  private initMiddlewares(middlewares: any[]) {
    middlewares.forEach((middleware) => {
      this.app.use(middleware)
    })
  }

  private initRoutes(routers: any[]) {
    routers.forEach((router) => {
      this.app.use('/api', router.routes())
    })

    this.app.get('/api', (req, res) => {})
  }
}
