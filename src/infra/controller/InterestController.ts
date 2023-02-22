import { CreateInterestRequest, CreateInterestResponse, HttpRequest, HttpResponse } from '@/app/dto';
import CreateInterestUseCase from '@/app/usecase/interest/CreateInterestUseCase';
import CreateInterestGateway from '../gateways/CreateInterestGateway';
import BaseController from './BaseController';

export default class InterestController extends BaseController {
	async create(req: HttpRequest<CreateInterestRequest>): Promise<HttpResponse<CreateInterestResponse>> {
		const createInterestGateway = new CreateInterestGateway();
		const createInterestUseCase = new CreateInterestUseCase(createInterestGateway);
		return await this.createUseCase(req, createInterestUseCase);
	}
}
