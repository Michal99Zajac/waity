import { CommonController } from './common/common-controler.controller'
import { Request, Response } from 'express'

export class RestaurantController extends CommonController {
  public getRestaurant(req: Request, res: Response) {
    res.status(200).json({
      name: 'Italy Violi Maioli',
      addres: 'home street, 54'
    })
  }
}