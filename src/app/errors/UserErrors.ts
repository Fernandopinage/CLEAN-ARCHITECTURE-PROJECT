import { ErrorMessage } from '../dto/http/HttpResponse';

export default class UserErrors {
	static auth: ErrorMessage = { message: 'authentication is required', code: 'ERROR-COMMON-1000' };
	static serverError: ErrorMessage = { message: 'you must fill in all required fields', code: 'ERROR-COMMON-1001' };
	static cpfInvalid: ErrorMessage = { message: 'must inform a valid cpd', code: 'ERROR-COMMON-1002' };
	static phoneInvalid: ErrorMessage = { message: 'must inform a valid phone', code: 'ERROR-COMMON-1003' };
}
