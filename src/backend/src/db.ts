import { Connection, createConnection } from 'typeorm'
import { User } from './entities/user.entity'


// export default async function createConnection() {
//    return await createConn({
//     type: 'sqlite',
//     database: './db.sql',
//     entities: [User],
//     synchronize: true
//   })
// }

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
