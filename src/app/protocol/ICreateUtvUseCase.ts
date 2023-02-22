import { CreateUtvRequest, CreateUtvResponse, HttpRequest } from '../dto';

export interface ICreateUtvUseCase {
	execute(input: HttpRequest<CreateUtvRequest>): Promise<HttpRequest<CreateUtvResponse>>;
}
