import { Column, Entity, ManyToMany, OneToMany, OneToOne, PrimaryGeneratedColumn, Unique } from 'typeorm'
import { Expose } from 'class-transformer'
import { User } from './user.entity'
import { Restaurant } from './restaurant.entity'


@Entity()
@Unique(['name'])
export class Role {
  @Expose()
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Expose()
  @Column({ name: 'name' })
  name!: string

  @Expose()
  @Column()
  desc?: string

  @Expose()
  @ManyToMany(() => User, user => user.roles)
  users!: User[]

  @Expose()
  @OneToMany(() => Restaurant, restaurant => restaurant.role)
  restaurants: Restaurant[]
}
