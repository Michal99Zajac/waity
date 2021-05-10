import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import UserRouter from './routers/user.router'
import { App } from './app'


(async () => {
  dotenv.config({ path: '.env.development' })

  const PORT = Number(process.env.PORT) || 8080
  const HOST = process.env.HOST || 'localhost'

  const app = new App([
    new UserRouter
  ],[
    bodyParser({ extended: true }),
    express.urlencoded({ extended: true })
  ])

  app.listen(PORT, HOST, `server listen on http://${HOST}:${PORT}`)
})()
