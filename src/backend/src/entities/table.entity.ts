import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Expose } from 'class-transformer'
import { IsInt } from 'class-validator'
import { Restaurant } from './restaurant.entity'
import { Reservation } from './reservation.entity'
import { Facility } from './facility.entity'


@Entity()
export class Table {
  @Expose()
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Expose()
  @IsInt()
  @Column()
  number!: number

  @Expose()
  @IsInt()
  @Column()
  width!: number

  @Expose()
  @IsInt()
  @Column()
  height!: number

  @Expose()
  @IsInt()
  @Column()
  seats!: number

  @Expose()
  @ManyToOne(() => Restaurant, restaurant => restaurant.tables, { cascade: ['remove', 'update'], onDelete: 'CASCADE' })
  @JoinColumn()
  restaurant!: Restaurant

  @Expose()
  @OneToMany(() => Reservation, reservation => reservation.table)
  reservations: Reservation[]

  @Expose()
  @ManyToMany(() => Facility, facility => facility.tables, { cascade: ['remove', 'update'], onDelete: 'CASCADE' })
  @JoinTable()
  facilities: Facility[]
}
