import { EntityRepository, Repository } from 'typeorm'
import { Address } from '../entities/address.entity'


@EntityRepository(Address)
export class AddressRepository extends Repository<Address> {
  async getOneByRestaurantId(id: string) {
    const qb = await this.createQueryBuilder('address')

    const address = await qb
      .select()
      .leftJoin('address.restaurantDetail', 'restaurantDetail')
      .leftJoin('restaurantDetail.restaurant', 'restaurant')
      .where('restaurant.id = :id', { id: id })
      .getOne()

    return address
  }
}