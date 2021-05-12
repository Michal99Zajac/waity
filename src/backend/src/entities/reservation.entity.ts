import { Expose } from 'class-transformer'
import { IsDate, IsIn } from 'class-validator'
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'


@Entity()
export class Reservation {
  @Expose()
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Expose()
  @IsIn(['available', 'clean', 'booked'])
  @Column()
  status!: string

  @Expose()
  @IsDate()
  @Column()
  start!: Date

  @Expose()
  @IsDate()
  @Column()
  end!: Date
}
