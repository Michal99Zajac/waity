import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Expose } from 'class-transformer'
import { IsEmail, IsUrl } from 'class-validator'
import { Restaurant } from './restaurant.entity'
import { Phone } from './phone.entity'
import { RestaurantCategory } from './restaurant-category.entity'
import { Address } from './address.entity'


@Entity()
export class RestaurantDetail {
  @Expose()
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Expose()
  @Column()
  name!: string

  @Expose()
  @IsUrl()
  @Column()
  website!: string

  @Expose()
  @IsEmail()
  @Column({ default: '' })
  email!: string

  @Expose()
  @OneToOne(() => Restaurant, restaurant => restaurant.restaurantDetail, { cascade: ['remove', 'update']})
  @JoinColumn()
  restaurant!: Restaurant

  @Expose()
  @OneToOne(() => Phone, phone => phone.restaurantDetail)
  @JoinColumn()
  phone!: Phone

  @Expose()
  @OneToOne(() => RestaurantCategory, restaurantCategory => restaurantCategory.restauranDetail)
  @JoinColumn()
  restaurantCategory!: RestaurantCategory

  @Expose()
  @OneToOne(() => Address, address => address.restaurantDetail)
  @JoinColumn()
  address!: Address
}
