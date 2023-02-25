import { ErrorMessage } from '../dto/http/HttpResponse';

export default class UserErrors {
	static serverError: ErrorMessage = { message: 'you must fill in all required fields', code: 'ERROR-COMMON-1000' };
}
