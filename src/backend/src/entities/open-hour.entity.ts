import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Timestamp } from 'typeorm'
import { Exclude, Expose } from 'class-transformer'
import { Contains, IsIn } from 'class-validator'
import { Restaurant } from './restaurant.entity'


@Entity()
export class OpenHour {
  @Expose()
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Expose()
  @IsIn(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'])
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

  @Exclude()
  @Expose()
  @ManyToOne(() => Restaurant, restaurant => restaurant.openHour, { cascade: ['remove', 'update'], onDelete: 'CASCADE' })
  @JoinColumn()
  restaurant!: Restaurant
}
