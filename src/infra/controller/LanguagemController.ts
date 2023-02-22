import { CreateLanguagemRequest, CreateLanguagemResponse, HttpRequest, HttpResponse } from '@/app/dto';
import CreateLanguagemUseCase from '@/app/usecase/languagem/CreateLanguagemUseCase';
import LanguagemGateway from '../gateways/Language,Gateway';
import BaseController from './BaseController';

export default class LanguagemController extends BaseController {
	async create(req: HttpRequest<CreateLanguagemRequest>): Promise<HttpResponse<CreateLanguagemResponse>> {
		const languagemGateway = new LanguagemGateway();
		const languagemUseCase = new CreateLanguagemUseCase(languagemGateway);
		return await this.createUseCase(req, languagemUseCase);
	}
}
