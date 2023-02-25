import { HttpRequest, CreateUserRequest, HttpResponse, CreateUserResponse } from '@/app/dto';
import CreateUserUseCase from '@/app/usecase/user/CreateUserUseCase';
import UserValidator from '@/app/validator/UserValidator';
import BaseController from '@/infra/controller/BaseController';
import UserGateway from '../gateways/UserGateway';

export default class UserController extends BaseController {
	async create(req: HttpRequest<CreateUserRequest>): Promise<HttpResponse<CreateUserResponse>> {
		const validator = new UserValidator();
		const userGateway = new UserGateway();
		const userUseCase = new CreateUserUseCase(userGateway, validator);
		return await this.createUseCase(req, userUseCase);
	}
}
