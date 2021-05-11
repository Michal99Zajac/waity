import { Request, Response, NextFunction} from 'express'
import { HttpError } from 'http-errors'


/**
 * handle all unsupported errors in app
 * 
 * @param err HttpError
 * @param req HTTP Express.Request
 * @param res HTTP Express.Response
 * @param next Expre.NextFunction
 */
export function errorHandler(err: HttpError, req: Request, res: Response, next: NextFunction) {
  res.status(err.status || 500).json({
    error: err.message
  })  
}
