import { Column, Entity, ManyToMany, PrimaryGeneratedColumn, Unique } from 'typeorm'
import { Expose } from 'class-transformer'
import { Table } from './table.entity'


@Entity()
@Unique(['name'])
export class Facility {
  @Expose()
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Expose()
  @Column()
  name!: string

  @Expose()
  @ManyToMany(() => Table, table => table.facilities)
  tables: Table[]
}
