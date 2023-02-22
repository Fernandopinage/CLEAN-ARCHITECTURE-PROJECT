import { CreateUserRequest } from '../dto';

export default class UserValidator {
	static hasFildsEmpy(input: CreateUserRequest) {
		if (
			!input.first_name ||
			!input.second_name ||
			!input.email ||
			!input.phone ||
			!input.password ||
			!input.rg ||
			!input.cpf ||
			!input.year
		) {
			return true;
		}
	}
}
