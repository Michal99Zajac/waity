import { EntityRepository, Repository } from 'typeorm'
import { RestaurantDetail } from '../entities/restaurant-detail.entity'


@EntityRepository(RestaurantDetail)
export class RestaurantDetailRepository extends Repository<RestaurantDetail> {
  async getOneByRestaurantId(id: string) {
    const qb = this.createQueryBuilder('restaurantDetail')

    const restaurantDetail = qb
      .select()
      .leftJoin('restaurantDetail.restaurant', 'restaurant')
      .where('restaurant.id = :id', { id: id })
      .getOne()

    return restaurantDetail
  }
}
