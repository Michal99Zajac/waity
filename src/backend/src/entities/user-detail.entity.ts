import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Expose } from 'class-transformer'
import { IsDate } from 'class-validator'
import { User } from './user.entity'
import { UserPhone } from './user-phone.entity'


@Entity()
export class UserDetail {
  @Expose()
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Expose()
  @Column()
  firstname!: string

  @Expose()
  @Column()
  lastname!: string

  @Expose()
  @IsDate()
  @Column()
  birth!: Date

  @Expose()
  @OneToOne(() => User, user => user.userDetail, { cascade: ['remove', 'update'] })
  @JoinColumn()
  user!: User

  @Expose()
  @OneToOne(() => UserPhone, userPhone => userPhone.userDetail)
  phone: UserPhone
}
