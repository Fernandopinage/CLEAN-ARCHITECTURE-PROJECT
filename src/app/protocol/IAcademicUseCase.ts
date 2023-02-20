import { CreateAcademicRequest, CreateAcademicResponse, HttpRequest, HttpResponse } from '../dto';

export interface IAcademicUseCase {
	execute(input: HttpRequest<CreateAcademicRequest>): Promise<HttpResponse<CreateAcademicResponse>>;
}
