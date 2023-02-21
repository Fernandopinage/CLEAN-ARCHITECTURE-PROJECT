import { HttpRequest, HttpResponse, CreateInterestResponse, CreateInterestRequest } from '../dto';

export interface ICreateInterestUseCase {
	execute(input: HttpRequest<CreateInterestRequest>): Promise<HttpResponse<CreateInterestResponse>>;
}
