import { CreateUserRequest, HttpRequest, HttpResponse } from '../dto';
import UserErrors from '../errors/UserErrors';
import StatusCode from '../status/StatusCode';
import CpfUtils from '../utils/CpfUtils';
import PhoneUtils from '../utils/PhoneUtils';
import { BaseValidator } from './BaseValidator';

export default class UserValidator extends BaseValidator<HttpRequest<CreateUserRequest>, HttpResponse<number>> {
	private hasFildsEmpy(input) {
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

	validator(input: HttpRequest<CreateUserRequest>): HttpResponse<number> {
		if (this.hasFildsEmpy(input.body)) {
			return {
				errors: [UserErrors.serverError],
				statusCode: StatusCode.badRequest
			};
		}
		if (!CpfUtils.isValid(input.body.cpf)) {
			return {
				errors: [UserErrors.cpfInvalid],
				statusCode: StatusCode.badRequest
			};
		}
		if (PhoneUtils.isValid(input.body.phone)) {
			return {
				errors: [UserErrors.phoneInvalid],
				statusCode: StatusCode.badRequest
			};
		}
		return {
			statusCode: 0
		};
	}
}
