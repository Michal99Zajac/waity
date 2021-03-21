import { App } from './app'
import { TestRoutes } from './routers/test.routers'
import { testLogger } from './middlewares/test.middleware'

const PORT = 8080

const app = new App(
  [
    new TestRoutes()
  ],
  [
    testLogger
  ]
)

app.listen(PORT, `Server listening on http:\\localhost:${PORT}`)