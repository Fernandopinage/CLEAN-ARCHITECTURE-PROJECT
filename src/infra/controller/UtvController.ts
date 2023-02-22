import { CreateUtvRequest, CreateUtvResponse, HttpRequest, HttpResponse } from '@/app/dto';
import CreateUtvUseCase from '@/app/usecase/utv/CreateUtvUseCase';
import UtvGateway from '../gateways/UtvGateway';
import BaseController from './BaseController';

export default class UtvController extends BaseController {
	async create(req: HttpRequest<CreateUtvRequest>): Promise<HttpResponse<CreateUtvResponse>> {
		const utvGateway = new UtvGateway();
		const utvUseCase = new CreateUtvUseCase(utvGateway);
		return await this.createUseCase(req, utvUseCase);
	}
}
