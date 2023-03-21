import {
	HttpRequest,
	CreateUserRequest,
	HttpResponse,
	CreateUserResponse,
	LoginUserRequest,
	LoginUserResponse
} from '@/app/dto';
import CreateUserUseCase from '@/app/usecase/user/CreateUserUseCase';
import LoginUserUseCase from '@/app/usecase/user/LoginUserUseCase';
import UserValidator from '@/app/validator/UserValidator';
import BaseController from '@/infra/controller/BaseController';
import UserGateway from '../gateways/UserGateway';

export default class UserController extends BaseController {
	async create(req: HttpRequest<CreateUserRequest>): Promise<HttpResponse<CreateUserResponse>> {
		const validator = new UserValidator();
		const userGateway = new UserGateway();
		const userUseCase = new CreateUserUseCase(userGateway, validator);
		return await this.useCase(req, userUseCase);
	}

	async loginUser(req: HttpRequest<LoginUserRequest>): Promise<HttpResponse<LoginUserResponse>> {
		const userGateway = new UserGateway();
		const loginUserCase = new LoginUserUseCase(userGateway);
		return await this.useCase(req, loginUserCase);
	}
}
