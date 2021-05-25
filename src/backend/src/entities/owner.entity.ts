import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Expose } from 'class-transformer'
import { IsAlpha, IsEmail } from 'class-validator'
import { Restaurant } from './restaurant.entity'
import { Address } from './address.entity'
import { OwnerPhone } from './owner-phone.entity'


@Entity()
export class Owner {
  @Expose()
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Expose()
  @IsAlpha()
  @Column()
  name!: string

  @Expose()
  @IsAlpha()
  @Column()
  lastname!: string

  @Expose()
  @IsEmail()
  @Column()
  email!: string

  @Expose()
  @OneToOne(() => Restaurant, restaurant => restaurant.owner, { cascade: ['remove', 'update'], onDelete: 'CASCADE' })
  @JoinColumn()
  restaurant!: Restaurant

  @Expose()
  @OneToOne(() => Address, address => address.owner)
  @JoinColumn()
  address!: Address

  @Expose()
  @OneToOne(() => OwnerPhone, ownerPhone => ownerPhone.owner)
  phone: OwnerPhone 
}
