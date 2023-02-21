import { HttpRequest, HttpResponse, CreateExperienceRequest, CreateExperienceResponse } from '../dto';

export interface ICreateExperienceUseCase {
	execute(input: HttpRequest<CreateExperienceRequest>): Promise<HttpResponse<CreateExperienceResponse>>;
}
