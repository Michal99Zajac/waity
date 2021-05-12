import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm'
import { Expose } from 'class-transformer'
import { IsAlpha, IsMobilePhone } from 'class-validator'


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
  @Column()
  number!: string
}
