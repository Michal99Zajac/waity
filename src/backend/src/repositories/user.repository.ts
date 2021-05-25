import { EntityRepository, Repository } from 'typeorm'
import { User } from '../entities/user.entity'


@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async findOneWithRoles(id: string) {
    const qb = this.createQueryBuilder('user')

    const user = await qb.leftJoinAndSelect('user.roles', 'role')
      .where('user.id = :id', { id: id })
      .getOne()

    return user
  }
}
