import { Mongoose } from "mongoose";

export interface IDatabaseService {
	instance: Mongoose | null
	connect: () => Promise<Mongoose>
  }

export type Message = {
	id: string;
	subject: string;
	detail: string;
	timestamp: string;
}
