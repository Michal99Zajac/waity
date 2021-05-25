import { Expose } from 'class-transformer'
import { IsDate, IsIn } from 'class-validator'
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Table } from './table.entity'
import { User } from './user.entity'


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

  @Expose()
  @ManyToOne(() => User, user => user.reservations, { cascade: ['remove', 'update'], onDelete: 'CASCADE' })
  @JoinColumn()
  user!: User

  @Expose()
  @ManyToOne(() => Table, table => table.reservations, { cascade: ['remove', 'update'], onDelete: 'CASCADE' })
  @JoinColumn()
  table: Table
}
