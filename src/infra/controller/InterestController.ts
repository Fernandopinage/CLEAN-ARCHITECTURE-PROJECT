import { CreateInterestRequest, CreateInterestResponse, HttpRequest, HttpResponse } from '@/app/dto';
import CreateInterestUseCase from '@/app/usecase/interest/CreateInterestUseCase';
import InterestGateway from '../gateways/InterestGateway';
import BaseController from './BaseController';

export default class InterestController extends BaseController {
	async create(req: HttpRequest<CreateInterestRequest>): Promise<HttpResponse<CreateInterestResponse>> {
		const createInterestGateway = new InterestGateway();
		const createInterestUseCase = new CreateInterestUseCase(createInterestGateway);
		return await this.createUseCase(req, createInterestUseCase);
	}
}
