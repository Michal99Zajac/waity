import { Request, Response, NextFunction } from 'express'
import { NotFound } from 'http-errors'


export function notFound(req: Request, res: Response, next: NextFunction) {
  next(new NotFound())
}
