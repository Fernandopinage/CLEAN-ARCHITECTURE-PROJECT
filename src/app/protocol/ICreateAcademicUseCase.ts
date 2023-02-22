import { CreateAcademicRequest, CreateAcademicResponse, HttpRequest, HttpResponse } from '../dto';

export interface ICreateAcademicUseCase {
	execute(input: HttpRequest<CreateAcademicRequest>): Promise<HttpResponse<CreateAcademicResponse>>;
}
