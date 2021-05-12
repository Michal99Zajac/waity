import { Request, Response, NextFunction } from 'express'
import { Forbidden } from 'http-errors'


export function guard(role: string[]) {
  return async (req: Request, res: Response, next: NextFunction) =>  {
    // TODO: find user with role

    next(new Forbidden())
  }
}
