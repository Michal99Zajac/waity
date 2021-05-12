import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { Expose } from 'class-transformer'
import { IsNumberString, MaxLength } from 'class-validator'


@Entity()
export class Food {
  @Expose()
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Expose()
  @MaxLength(1024, { message: 'decription is to long'})
  @Column()
  desc?: string

  @Expose()
  @IsNumberString()
  @Column()
  price!: string

  @Expose()
  @Column()
  name!: string
}
