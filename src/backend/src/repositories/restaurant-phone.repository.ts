import { EntityRepository, Repository } from 'typeorm'
import { RestaurantPhone } from '../entities/restaurant-phone.entity'


@EntityRepository(RestaurantPhone)
export class RestaurantPhoneRepository extends Repository<RestaurantPhone> {
  async getOneByRestaurantId(id: string) {
    const qb = this.createQueryBuilder('restaurantPhone')

    const restaurantDetail = qb
      .select()
      .leftJoin('restaurantPhone.restaurant', 'restaurant')
      .where('restaurant.id = :id', { id: id })
      .getOne()

    return restaurantDetail
  }
}
