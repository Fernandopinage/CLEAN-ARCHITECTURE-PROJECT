import { HttpRequest, HttpResponse, CreateAddressRequest } from '../dto';
import UserErrors from '../errors/UserErrors';
import StatusCode from '../status/StatusCode';
import { BaseValidator } from './BaseValidator';

export default class AddressValidator extends BaseValidator<HttpRequest<CreateAddressRequest>, HttpResponse<number>> {
	private hasFildsEmpy(input) {
		if (!input.cep || !input.uf || !input.city || !input.neighborhood || !input.number) {
			return true;
		}
	}

	validator(input: HttpRequest<CreateAddressRequest>): HttpResponse<number> {
		if (this.hasFildsEmpy(input.body)) {
			return {
				errors: [UserErrors.serverError],
				statusCode: StatusCode.badRequest
			};
		}
		return {
			statusCode: 0
		};
	}
}
