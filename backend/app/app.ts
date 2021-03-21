import express from 'express'

export class App {
  public app: express.Application

  constructor(routes: any[], middlewares: any[]) {
    this.app = express()

    this.initMiddlewares(middlewares);
    this.initRoutes(routes);
  }

  public listen(port: number, message: string) {
    this.app.listen(port, () => {
      console.log(message)
    })
  }

  private initMiddlewares(middlewares: any[]) {
    middlewares.forEach((middleware) => {
      this.app.use(middleware)
    })
  }

  private initRoutes(routes: any[]) {
    routes.forEach((route) => {
      this.app.use('/api', route.routes())
    })
  }
}
