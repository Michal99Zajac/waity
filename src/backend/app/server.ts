import { App } from './app'
import cors from 'cors'
import { TestRouter } from './routers/test.routers'
import { UserRouter } from './routers/user.routers'
import { RestaurantRouter } from './routers/restaurant.routers'
import { testLogger } from './middlewares/test.middleware'


const PORT = Number(process.env.PORT) || 8080
const HOST = process.env.HOST || 'localhost'

const app = new App(
  [
    new TestRouter(),
    new UserRouter(),
    new RestaurantRouter()
  ],
  [
    testLogger,
    cors()
  ]
)

app.listen(PORT, HOST, `Server listening on http://${HOST}:${PORT}/api`)
