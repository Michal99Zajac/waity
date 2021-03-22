import { App } from './app'
import { TestRouter } from './routers/test.routers'
import { UserRouter } from './routers/user.routers'
import { RestaurantRouter } from './routers/restaurant.routers'
import { testLogger } from './middlewares/test.middleware'

const PORT = 8080

const app = new App(
  [
    new TestRouter(),
    new UserRouter(),
    new RestaurantRouter()
  ],
  [
    testLogger
  ]
)

app.listen(PORT, `Server listening on http:\\localhost:${PORT}`)