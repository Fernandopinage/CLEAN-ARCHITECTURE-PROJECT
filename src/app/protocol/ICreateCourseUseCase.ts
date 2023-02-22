import { CreateCourseRequest, CreateCourseResponse, HttpRequest, HttpResponse } from '../dto';

export interface ICreateCourseUseCase {
	execute(input: HttpRequest<CreateCourseRequest>): Promise<HttpResponse<CreateCourseResponse>>;
}
