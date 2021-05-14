import { getCustomRepository } from 'typeorm'
import { Request, Response, NextFunction } from 'express'
import { Forbidden } from 'http-errors'
import { UserRepository } from '../repositories/user.repository'
import { Restaurant } from '../entities/restaurant.entity'
import { User } from '../entities/user.entity'


/**
 * check if the user or restaurant has permission to view the data
 * 
 * @param role array of roles that have permissions 
 */
export function guard(role: string[]) {
  return async (req: Request, res: Response, next: NextFunction) =>  {
    if (req.user instanceof Restaurant) {
      next()
    }

    if (req.user instanceof User) {
      const user = await getCustomRepository(UserRepository).findOneWithRoles(req.user.id.toString())
      const roles = user?.roles.map(role => role.name)

      if (roles?.some(r => role.includes(r))) {
        next()
      } else {
        next(new Forbidden())
      }
    }
  }
}
