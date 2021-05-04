
import DatabaseService from './database'
import config from './database/database.config'
import { MONGO_DB_DATABASE } from '../config'

const database = new DatabaseService(config(String(MONGO_DB_DATABASE)))

export { database }
