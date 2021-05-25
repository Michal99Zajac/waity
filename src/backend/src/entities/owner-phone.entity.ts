import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, Unique } from 'typeorm'
import { Expose } from 'class-transformer'
import { IsAlpha, IsMobilePhone } from 'class-validator'
import { Restaurant } from './restaurant.entity'
import { Owner } from './owner.entity'


@Entity()
@Unique(['number'])
export class OwnerPhone {
  @Expose()
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Expose()
  @IsAlpha()
  @Column()
  country!: string

  @Expose()
  @IsMobilePhone()
  @Column({ name: 'number' })
  number!: string

  @Expose()
  @OneToOne(() => Owner, owner => owner.phone, { cascade: ['remove', 'update']})
  @JoinColumn()
  owner!: Owner
}
