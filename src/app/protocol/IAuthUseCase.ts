import { HttpRequest, HttpResponse } from '../dto';

export interface IAuthUseCase {
	execute(input: HttpRequest<string>): Promise<HttpResponse<void>>;
}
