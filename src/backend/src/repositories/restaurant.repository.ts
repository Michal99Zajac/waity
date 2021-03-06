import { EntityRepository, Repository } from 'typeorm'
import { Restaurant } from '../entities/restaurant.entity'


@EntityRepository(Restaurant)
export class RestaurantRepository extends Repository<Restaurant> {
  async getOneWithDetail(id: string) {
    const qb = this.createQueryBuilder('restaurant')

    const restaurant = await qb
      .select('restaurant.id')
      .leftJoinAndSelect('restaurant.restaurantDetail', 'restaurantDetail')
      .leftJoinAndSelect('restaurantDetail.address', 'address')
      .leftJoinAndSelect('restaurantDetail.restaurantCategory', 'restaurantCategory')
      .leftJoinAndSelect('restaurant.phone', 'phone')
      .where('restaurant.id = :id', { id: id })
      .getOne()

    return restaurant
  }

  async getManyByCategory(category?: string) {
    const qb = this.createQueryBuilder('restaurant')

    const restaurants = await qb
      .select('restaurant.id')
      .leftJoin('restaurant.restaurantDetail', 'restaurantDetail').addSelect('restaurantDetail.name')
      .leftJoin('restaurantDetail.restaurantCategory', 'restaurantCategory').addSelect('restaurantCategory.name')
      .leftJoin('restaurantDetail.address', 'address').addSelect('address.addr')
      .leftJoin('restaurant.foods', 'food').addSelect(['food.price', 'food.name'])
      .where('LOWER(restaurantCategory.name) = LOWER(:category)', { category: category })
      .getMany()

      return restaurants
  }

  async getMany() {
    const qb = this.createQueryBuilder('restaurant')

    const restaurants = await qb
      .select('restaurant.id')
      .leftJoin('restaurant.restaurantDetail', 'restaurantDetail').addSelect('restaurantDetail.name')
      .leftJoin('restaurantDetail.restaurantCategory', 'restaurantCategory').addSelect('restaurantCategory.name')
      .leftJoin('restaurantDetail.address', 'address').addSelect('address.addr')
      .leftJoin('restaurant.foods', 'food').addSelect(['food.price', 'food.name'])
      .getMany()

    return restaurants
  }
}
