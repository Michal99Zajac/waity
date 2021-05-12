import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { Expose } from 'class-transformer'


@Entity()
export class RestaurantCategory {
  @Expose()
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Expose()
  @Column()
  name!: string
}
