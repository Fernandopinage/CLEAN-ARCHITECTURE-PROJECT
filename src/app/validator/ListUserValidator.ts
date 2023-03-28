import { HttpRequest, HttpResponse } from '../dto';
import UserErrors from '../errors/UserErrors';
import { IListUserValidator } from '../protocol/validator/IListUserValidator';
import StatusCode from '../status/StatusCode';
import JwtToken from '../utils/JwtToken';
import { BaseValidator } from './BaseValidator';

export default class ListUserValidator
	extends BaseValidator<HttpRequest<void>, HttpResponse<number>>
	implements IListUserValidator
{
	protected auth(input: string): boolean {
		try {
			JwtToken.verifyToken(input);
			return true;
		} catch (error) {
			console.log('>>>>', error);
			return false;
		}
	}
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
