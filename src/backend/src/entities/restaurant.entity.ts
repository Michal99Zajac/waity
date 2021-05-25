import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, Unique } from 'typeorm'
import { Expose } from 'class-transformer'
import { IsAlphanumeric, Matches, MaxLength, MinLength } from 'class-validator'
import { Food } from './food.entity'
import { Role } from './role.entity'
import { RestaurantDetail } from './restaurant-detail.entity'
import { OpenHour } from './open-hour.entity'
import { Owner } from './owner.entity'
import { Table } from './table.entity'
import { RestaurantPhone } from './restaurant-phone.entity'


@Entity()
@Unique(['TIN', 'passcode'])
export class Restaurant {
  @Expose()
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Expose()
  @Column({ name: 'TIN' })
  TIN!: string

  @MinLength(7, { message: 'to short password' })
  @MaxLength(100, { message: 'password is to long' })
  @Matches(/.*[1-9].*$/, {message: 'password must contain number'})
  @Matches(/.*[A-Z].*$/, { message: 'password must contain capital letter'})
  @Column({ select: false })
  password!: string

  @Expose()
  @IsAlphanumeric()
  @MinLength(7)
  @MaxLength(7)
  @Column({ name: 'passcode' })
  passcode!: string

  @Expose()
  @OneToMany(() => Food, food => food.restaurant)
  foods: Food[]

  @ManyToOne(() => Role, role => role.restaurants)
  @JoinColumn()
  role!: Role

  @Expose()
  @OneToOne(() => RestaurantDetail, restaurantDetail => restaurantDetail.restaurant)
  restaurantDetail: RestaurantDetail

  @Expose()
  @OneToMany(() => OpenHour, openHour => openHour.restaurant)
  openHour: OpenHour

  @Expose()
  @OneToOne(() => Owner, owner => owner.restaurant)
  owner: Owner

  @Expose()
  @OneToMany(() => Table, table => table.restaurant)
  tables: Table[]

  @Expose()
  @OneToOne(() => RestaurantPhone, restaurantPhone => restaurantPhone.restaurant)
  phone: RestaurantPhone
}
