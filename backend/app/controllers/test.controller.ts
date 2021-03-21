import { Request, Response } from 'express'

export class TestController {
  public getTests(req: Request, res: Response) {
    res.status(200).json({
      test: "you get tests"
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
