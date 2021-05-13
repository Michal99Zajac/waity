import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Expose } from 'class-transformer'
import { IsPostalCode } from 'class-validator'
import { RestaurantDetail } from './restaurant-detail.entity'
import { Owner } from './owner.entity'


@Entity()
export class Address {
  @Expose()
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Expose()
  @Column()
  country!: string

  @Expose()
  @Column()
  city!: string

  @Expose()
  @IsPostalCode()
  @Column()
  postalcode!: string

  @Expose()
  @Column()
  addr!: string

  @Expose()
  @OneToOne(() => RestaurantDetail, restaurantDetail => restaurantDetail.address)
  restaurantDetail: RestaurantDetail

  @Expose()
  @OneToOne(() => Owner, owner => owner.address)
  owner: Owner
}
