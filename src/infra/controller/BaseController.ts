import { HttpResponse, CreateUserResponse, HttpRequest } from '@/app/dto';
import CommonErrors from '@/app/errors/CommonErrors';
import StatusCode from '@/app/status/StatusCode';

export default class BaseController {
	async createUseCase(req: HttpRequest<object>, useCase): Promise<HttpResponse<CreateUserResponse>> {
		try {
			return useCase.create(req);
		} catch (error) {
			console.log(error);
			return {
				statusCode: StatusCode.serveError,
				errors: [CommonErrors.serverError]
			};
		}
	}
}
