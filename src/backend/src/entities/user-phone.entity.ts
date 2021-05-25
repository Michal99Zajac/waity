import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, Unique } from 'typeorm'
import { Expose } from 'class-transformer'
import { IsAlpha, IsMobilePhone } from 'class-validator'
import { UserDetail } from './user-detail.entity'


@Entity()
@Unique(['number'])
export class UserPhone {
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
  @OneToOne(() => UserDetail, userDetail => userDetail.phone, { cascade: ['remove', 'update'], onDelete: 'CASCADE'})
  @JoinColumn()
  userDetail!: UserDetail
}
