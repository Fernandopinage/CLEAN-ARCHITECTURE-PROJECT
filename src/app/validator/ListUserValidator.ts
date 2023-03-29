import { HttpRequest, HttpResponse } from '../dto';
import UserErrors from '../errors/UserErrors';
import { IListUserValidator } from '../protocol/validator/IListUserValidator';
import StatusCode from '../status/StatusCode';
import { BaseValidator } from './BaseValidator';

export default class ListUserValidator
	extends BaseValidator<HttpRequest<void>, HttpResponse<number>>
	implements IListUserValidator
{
	validator(input: HttpRequest<void>): HttpResponse<number> {
		if (!this.auth(input.headers.token)) {
			return {
				errors: [UserErrors.auth],
				statusCode: StatusCode.Unauthorized
			};
		}
		return {
			statusCode: 0
		};
	}
}
