import { CreateCourseRequest, CreateCourseResponse, HttpRequest, HttpResponse } from '../dto';

export interface ICourseUseCase {
	execute(input: HttpRequest<CreateCourseRequest>): Promise<HttpResponse<CreateCourseResponse>>;
}
