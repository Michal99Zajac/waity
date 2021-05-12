// import 'reflect-metadata'
import { Connection, createConnection } from 'typeorm'


let connection: Connection

export async function connect() {
  connection = await createConnection()

  return connection
}

export default () => { return connection }
