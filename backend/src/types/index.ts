import { Mongoose } from "mongoose";

export interface IDatabaseService {
	instance: Mongoose | null
	connect: () => Promise<Mongoose>
  }
