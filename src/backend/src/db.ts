import { Connection, createConnection } from 'typeorm'
import { User } from './entities/user.entity'


let connection: Connection

export async function connect() {
  connection = await createConnection({
    type: 'sqlite',
    database: './db.sql',
    entities: [User],
    synchronize: true
  })

  return connection
}

export default () => { return connection }
