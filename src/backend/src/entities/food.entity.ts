import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Expose } from 'class-transformer'
import { IsNumberString, MaxLength } from 'class-validator'
import { FoodCategory } from './food-category.entity'
import { Restaurant } from './restaurant.entity'


@Entity()
export class Food {
  @Expose()
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Expose()
  @MaxLength(1024, { message: 'decription is to long'})
  @Column({ default: null })
  desc?: string

  @Expose()
  @IsNumberString()
  @Column()
  price!: string

  @Expose()
  @Column()
  name!: string

  @Expose()
  @ManyToOne(() => FoodCategory, foodCategory => foodCategory.foods, { cascade: ['remove', 'update'], onDelete: 'CASCADE' })
  @JoinColumn()
  foodCategory!: FoodCategory

  @Expose()
  @ManyToOne(() => Restaurant, restaurant => restaurant.foods, { cascade: ['remove', 'update'], onDelete: 'CASCADE' })
  @JoinColumn()
  restaurant!: Restaurant
}
