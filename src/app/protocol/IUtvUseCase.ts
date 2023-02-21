import { CreateUtvRequest, CreateUtvResponse, HttpRequest } from '../dto';

export interface IUtvUseCase {
	execute(input: HttpRequest<CreateUtvRequest>): Promise<HttpRequest<CreateUtvResponse>>;
}
