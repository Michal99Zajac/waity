import { Column, Entity, OneToMany, PrimaryGeneratedColumn, Unique } from 'typeorm'
import { Expose } from 'class-transformer'
import { Food } from './food.entity'


@Entity()
@Unique(['name'])
export class FoodCategory {
  @Expose()
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Expose()
  @Column()
  name!: string

  @Expose()
  @OneToMany(() => Food, food => food.foodCategory)
  foods: Food[]
}
