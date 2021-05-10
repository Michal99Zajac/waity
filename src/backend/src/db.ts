import { Connection, createConnection as createConn } from 'typeorm'
import { User } from './entities/user.entity'


export default async function createConnection() {
   return await createConn({
    type: 'sqlite',
    database: './db.sql',
    entities: [User],
    synchronize: true
  })
}
