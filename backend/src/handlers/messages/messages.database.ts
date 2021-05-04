// TODO
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { database as DatabaseService } from '../../services'
import { Schema, model, Document } from 'mongoose'
import { Message } from 'src/types'


export const MessageSchema = new Schema({
	id: String,
	timestamp: String,
	subject: String,
	detail: String
  })
  
export const Model = model<Message & Document>('messages', MessageSchema)

export function Repository(database = DatabaseService, model = Model) {
	const getMessageList = async () => {
		await database.connect()
		const result = await model.find()

		return result
	}

	return {
		getMessageList,
	}
}
