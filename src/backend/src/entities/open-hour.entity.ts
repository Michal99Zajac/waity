import { Column, Entity, PrimaryGeneratedColumn, Timestamp } from 'typeorm'
import { Expose } from 'class-transformer'
import { Contains } from 'class-validator'


@Entity()
export class OpenHour {
  @Expose()
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Expose()
  @Column()
  day!: string

  @Expose()
  @Contains(':')
  @Column()
  start!: string

  @Expose()
  @Contains(':')
  @Column()
  end!: string
}
