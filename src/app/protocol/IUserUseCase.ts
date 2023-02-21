import { CreateUtvRequest, CreateUtvResponse, HttpRequest, HttpResponse } from '../dto';

export interface IUserUseCase {
	execute(input: HttpRequest<CreateUtvRequest>): Promise<HttpResponse<CreateUtvResponse>>;
}
