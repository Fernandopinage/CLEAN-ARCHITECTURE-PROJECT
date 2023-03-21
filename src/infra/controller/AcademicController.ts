import { CreateAcademicRequest, CreateAcademicResponse, HttpRequest, HttpResponse } from '@/app/dto';
import CreateAcademicUseCase from '@/app/usecase/academic/CreateAcademicUseCase';
import AcademicGateway from '../gateways/AcademicGateway';
import BaseController from './BaseController';

export default class AcademicController extends BaseController {
	async create(req: HttpRequest<CreateAcademicRequest>): Promise<HttpResponse<CreateAcademicResponse>> {
		const academicGateway = new AcademicGateway();
		const academicUseCase = new CreateAcademicUseCase(academicGateway);
		return await this.useCase(req, academicUseCase);
	}
}
