import express from 'express'
import bodyParser from 'body-parser'
import { connect } from './db'
import passport from './passport'

import { errorHandler } from './middlewares/error-handler.mid'
import { notFound } from './middlewares/not-found.mid'

import userRouter from './routers/user.router'
import authRouter from './routers/auth.router'
import restaurantRouter from './routers/restaurant.router'
import addressRouter from './routers/address.router'


export default async function Application(): Promise<express.Application> {
  const app: express.Application = express()

  // connect to database
  await connect()

  // middlewares
  app.use('/api', bodyParser({ extended: true }))
  app.use('/api', express.urlencoded({ extended: true }))
  app.use('/api', passport.initialize())

  // routers
  app.use('/api', userRouter)
  app.use('/api', authRouter)
  app.use('/api', restaurantRouter)
  app.use('/api', addressRouter)

  // errors handler
  app.use('/api', notFound)
  app.use('/api', errorHandler)

  return app
}
