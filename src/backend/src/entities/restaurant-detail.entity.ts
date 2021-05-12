import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { Expose } from 'class-transformer'
import { IsUrl } from 'class-validator'


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
}
