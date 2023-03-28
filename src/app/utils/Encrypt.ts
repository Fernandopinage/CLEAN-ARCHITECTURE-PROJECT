import { hash } from 'bcrypt';
import * as dotenv from 'dotenv';
dotenv.config();

export default class Encrypt {
	static async hash(input: string): Promise<string> {
		return await hash(input, 10);
	}
}
