import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm'
import { Expose } from 'class-transformer'
import { IsAlphanumeric, Matches, MaxLength, MinLength } from 'class-validator'


@Entity()
@Unique(['TIN', 'passcode'])
export class Restaurant {
  @Expose()
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Expose()
  @Column()
  TIN!: string

  @MinLength(7, { message: 'to short password' })
  @MaxLength(100, { message: 'password is to long' })
  @Matches(/.*[1-9].*$/, {message: 'password must contain number'})
  @Matches(/.*[A-Z].*$/, { message: 'password must contain capital letter'})
  @Column()
  password!: string

  @Expose()
  @IsAlphanumeric()
  @MinLength(7)
  @MaxLength(7)
  @Column()
  passcode!: string
}
