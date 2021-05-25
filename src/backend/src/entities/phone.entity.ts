import { Column, Entity, OneToOne, PrimaryGeneratedColumn, Unique } from 'typeorm'
import { Expose } from 'class-transformer'
import { IsAlpha, IsMobilePhone } from 'class-validator'
import { UserDetail } from './user-detail.entity'
import { RestaurantDetail } from './restaurant-detail.entity'
import { Owner } from './owner.entity'


@Entity()
@Unique(['number'])
export class Phone {
  @Expose()
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Expose()
  @IsAlpha()
  @Column()
  country!: string

  @Expose()
  @IsMobilePhone()
  @Column({ name: 'number' })
  number!: string

  @Expose()
  @OneToOne(() => UserDetail, userDetail => userDetail.phone)
  userDetail: UserDetail

  @Expose()
  @OneToOne(() => RestaurantDetail, restaurantDetail => restaurantDetail.phone)
  restaurantDetail: RestaurantDetail

  @Expose()
  @OneToOne(() => Owner, owner => owner.phone)
  owner: Owner
}
