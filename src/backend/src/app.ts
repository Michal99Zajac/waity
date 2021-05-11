import express from 'express'
import bodyParser from 'body-parser'
import { connect } from './db'
import passport from './passport'

import { errorHandler } from './middlewares/error-handler.mid'
import { notFound } from './middlewares/not-found.mid'

import userRouter from './routers/user.router'
import authRouter from './routers/auth.router'


export default async function Application(): Promise<express.Application> {
  const app: express.Application = express()

  // connect to database
  await connect()

  // middlewares
  app.use('/api', bodyParser({ extended: true }))
  app.use('/api', bodyParser.urlencoded({ extended: true }))
  app.use('/api', passport.initialize())

  // routers
  app.use('/api', userRouter)
  app.use('/api', authRouter)

  // errors handler
  app.use('/api', notFound)
  app.use('/api', errorHandler)

  return app
}
