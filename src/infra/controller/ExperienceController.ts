import { CreateExperienceRequest, CreateExperienceResponse, HttpRequest, HttpResponse } from '@/app/dto';
import CreateExperienceUseCase from '@/app/usecase/experience/CreateExperienceUseCase';
import CreateExperienceGateway from '../gateways/CreateExperienceGateway';
import BaseController from './BaseController';

export default class ExperienceController extends BaseController {
	async create(req: HttpRequest<CreateExperienceRequest>): Promise<HttpResponse<CreateExperienceResponse>> {
		const experienceGateway = new CreateExperienceGateway();
		const experienceUseCase = new CreateExperienceUseCase(experienceGateway);
		return await this.createUseCase(req, experienceUseCase);
	}
}
