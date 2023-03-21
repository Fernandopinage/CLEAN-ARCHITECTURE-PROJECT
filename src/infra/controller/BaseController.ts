import { HttpResponse, HttpRequest } from '@/app/dto';
import CommonErrors from '@/app/errors/CommonErrors';
import StatusCode from '@/app/status/StatusCode';

export default class BaseController {
	async useCase(req: HttpRequest<object>, useCase): Promise<HttpResponse<object>> {
		try {
			return useCase.execute(req);
		} catch (error) {
			console.log(error);
			return {
				statusCode: StatusCode.serveError,
				errors: [CommonErrors.serverError]
			};
		}
	}
}
