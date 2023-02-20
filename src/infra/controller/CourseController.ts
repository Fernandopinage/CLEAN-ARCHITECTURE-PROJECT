import { CreateCourseRequest, CreateCourseResponse, HttpRequest, HttpResponse } from '@/app/dto';
import CourseUseCase from '@/app/usecase/course/CourseUseCase';
import CourseGateway from '../gateways/CourseGateway';
import BaseController from './BaseController';

export default class CourseController extends BaseController {
	async create(req: HttpRequest<CreateCourseRequest>): Promise<HttpResponse<CreateCourseResponse>> {
		const courseGateway = new CourseGateway();
		const courseUseCase = new CourseUseCase(courseGateway);
		return await this.createUseCase(req, courseUseCase);
	}
}
