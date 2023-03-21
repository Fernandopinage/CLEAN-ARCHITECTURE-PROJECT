import { CreateCourseRequest, CreateCourseResponse, HttpRequest, HttpResponse } from '@/app/dto';
import CreateCourseUseCase from '@/app/usecase/course/CreateCourseUseCase';
import CourseGateway from '../gateways/CourseGateway';
import BaseController from './BaseController';

export default class CourseController extends BaseController {
	async create(req: HttpRequest<CreateCourseRequest>): Promise<HttpResponse<CreateCourseResponse>> {
		const courseGateway = new CourseGateway();
		const courseUseCase = new CreateCourseUseCase(courseGateway);
		return await this.useCase(req, courseUseCase);
	}
}
