// import mongoose from 'mongoose'
// import type { Mongoose, ConnectionOptions } from 'mongoose'

// class DatabaseService {
//   private options: [string, ConnectionOptions]
//   instance: Mongoose

//   constructor(options: [string, ConnectionOptions]) {
//     this.options = options
//     this.instance = mongoose
//   }

//   async connect(): Promise<Mongoose> {
//     if (this.instance?.connection?.readyState === 1) {
//       console.log('Already connected, returning instance')
//       return new Promise((resolve, reject) => resolve(this.instance))
//     }

//     this.instance = await mongoose.connect(...this.options)
//     return this.instance
//   }
// }

// export default DatabaseService
