import { Request, Response } from 'express'
import { CommonController } from './common/common-controler.controller'

export class TestController extends CommonController {
  public getTests(req: Request, res: Response) {
    res.status(200).json({
      test: 'all tests'
    })
  }

  public getTest(req: Request, res: Response) {
    let id = req.params.id

    res.status(200).json({
      id: id,
      test: 'special test'
    })
  }

  public addTest(req: Request, res: Response) {
    res.status(201).json({
      id: 1000,
      test: 'new test'
    })
  }
} 
