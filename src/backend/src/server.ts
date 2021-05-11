import application from './app'
import dotenv from 'dotenv'


(async () => {
  dotenv.config({ path: '.env.development' })

  const app = await application()

  const PORT = Number(process.env.PORT) || 8080
  const HOST = process.env.HOST || 'localhost'

  app.listen(PORT, HOST, () => {
    console.log(`server listen on http://${HOST}:${PORT}`)
  })
})()
