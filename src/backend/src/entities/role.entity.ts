import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm'
import { Expose } from 'class-transformer'


@Entity()
@Unique(['name'])
export class Role {
  @Expose()
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Expose()
  @Column()
  name!: string

  @Expose()
  @Column()
  desc?: string
}
