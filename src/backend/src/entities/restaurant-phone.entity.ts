import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, Unique } from 'typeorm'
import { Expose } from 'class-transformer'
import { IsAlpha, IsMobilePhone } from 'class-validator'
import { Restaurant } from './restaurant.entity'


@Entity()
@Unique(['number'])
export class RestaurantPhone {
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
  @OneToOne(() => Restaurant, restaurant => restaurant.phone, { cascade: ['remove', 'update']})
  @JoinColumn()
  restaurant!: Restaurant
}
