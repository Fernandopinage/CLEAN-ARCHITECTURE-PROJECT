import { CreateAcademicRequest, CreateAcademicResponse, HttpRequest, HttpResponse } from '@/app/dto';
import AcademicUseCase from '@/app/usecase/academic/AcademicUseCase';
import AcademicGateway from '../gateways/AcademicGateway';
import BaseController from './BaseController';

export default class AcademicController extends BaseController {
	async create(req: HttpRequest<CreateAcademicRequest>): Promise<HttpResponse<CreateAcademicResponse>> {
		const academicGateway = new AcademicGateway();
		const academicUseCase = new AcademicUseCase(academicGateway);
		return await this.createUseCase(req, academicUseCase);
	}
}
