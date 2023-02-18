import { HttpRequest, CreateUserRequest, HttpResponse, CreateUserResponse } from '@/app/dto';
import UserUseCase from '@/app/usecase/UserUseCase';
import BaseController from '@/infra/controller/BaseController';
import UserGateway from '../gateways/UserGateway';

export default class UserController extends BaseController {
	async create(req: HttpRequest<CreateUserRequest>): Promise<HttpResponse<CreateUserResponse>> {
		const userGateway = new UserGateway();
		const userUseCase = new UserUseCase(userGateway);
		return await this.createUseCase(req, userUseCase);
	}
}
