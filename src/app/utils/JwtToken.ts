import Jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';
dotenv.config();

export default class JwtToken {
	static generateToken(input: object): string {
		return Jwt.sign(input, process.env.TOKEN_SECURITY);
	}

	static verifyToken(input: string) {
		return Jwt.verify(input, process.env.TOKEN_SECURITY);
	}
}
