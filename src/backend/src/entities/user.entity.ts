import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm'
import { Expose } from 'class-transformer'
import { MinLength, IsEmail } from 'class-validator'


@Entity()
@Unique(['email'])
export class User {
  @Expose()
  @PrimaryGeneratedColumn('uuid')
  id!: number

  @Expose()
  @IsEmail()
  @Column({ name: 'email'})
  email!: string

  @MinLength(7, { message: 'to short password' })
  @Column()
  password!: string
}
