import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { Expose } from 'class-transformer'
import { IsAlpha, IsEmail } from 'class-validator'


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
}
