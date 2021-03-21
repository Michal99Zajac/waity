import { Request, Response, NextFunction } from 'express'

export const testLogger = (req: Request, res: Response, next: NextFunction) => {
  console.log(`${req.path} ${req.method}`)
  next()
}
