import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { Expose } from 'class-transformer'
import { IsPostalCode } from 'class-validator'


@Entity()
export class Address {
  @Expose()
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Expose()
  @Column()
  country!: string

  @Expose()
  @Column()
  city!: string

  @Expose()
  @IsPostalCode()
  @Column()
  postalcode!: string

  @Expose()
  @Column()
  address!: string
}
