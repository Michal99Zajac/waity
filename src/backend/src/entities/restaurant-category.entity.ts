import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Expose } from 'class-transformer'
import { RestaurantDetail } from './restaurant-detail.entity'


@Entity()
export class RestaurantCategory {
  @Expose()
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Expose()
  @Column()
  name!: string

  @Expose()
  @OneToOne(() => RestaurantDetail, restaurantDetail => restaurantDetail.restaurantCategory)
  restauranDetail: RestaurantDetail
}
