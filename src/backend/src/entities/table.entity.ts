import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { Expose } from 'class-transformer'
import { IsInt } from 'class-validator'


@Entity()
export class Table {
  @Expose()
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Expose()
  @IsInt()
  @Column()
  number!: number

  @Expose()
  @IsInt()
  @Column()
  width!: number

  @Expose()
  @IsInt()
  @Column()
  height!: number

  @Expose()
  @IsInt()
  @Column()
  seats!: number
}
