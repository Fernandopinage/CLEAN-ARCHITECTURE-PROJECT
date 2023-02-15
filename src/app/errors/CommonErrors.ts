import { ErrorMessage } from '../dto/http/HttpResponse';

export default class CommonErrors {
	static serverError: ErrorMessage = { message: 'Internal Server Error', code: 'ERROR-COMMON-1000' };
}
