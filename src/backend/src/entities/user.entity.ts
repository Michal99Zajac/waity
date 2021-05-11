import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm'
import { Expose } from 'class-transformer'
import { MinLength, IsEmail, MaxLength, Matches } from 'class-validator'


@Entity()
@Unique(['email'])
export class User {
  @Expose()
  @PrimaryGeneratedColumn('uuid')
  id!: number

  @Expose()
  @IsEmail()
  @MaxLength(255, { message: 'email is to long'})
  @Column({ name: 'email'})
  email!: string

  @MinLength(7, { message: 'to short password' })
  @MaxLength(100, { message: 'password is to long' })
  @Matches(/.*[1-9].*$/, {message: 'password must contain number'})
  @Matches(/.*[A-Z].*$/, { message: 'password must contain capital letter'})
  @Column()
  password!: string
}
