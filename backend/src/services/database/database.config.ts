import { ConnectionOptions } from 'mongoose'
import { MONGODB_HOST, MONGODB_PASSWORD, MONGODB_USERNAME } from '../../config'


const config = (database: string): [string, ConnectionOptions] => [
  `${MONGODB_HOST}/${database}` || 'notprovided',
  {
    user: MONGODB_USERNAME,
    pass: MONGODB_PASSWORD,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 2000,
    socketTimeoutMS: 15000,
  },
]

export default config
