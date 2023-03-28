import {
	HttpRequest,
	CreateUserRequest,
	HttpResponse,
	CreateUserResponse,
	LoginUserRequest,
	LoginUserResponse
} from '@/app/dto';
import { ListUserResponse } from '@/app/dto/user/list-all-user/ListUserResponse';
import CreateUserUseCase from '@/app/usecase/user/CreateUserUseCase';
import ListUserUseCase from '@/app/usecase/user/ListUserUseCase';
import LoginUserUseCase from '@/app/usecase/user/LoginUserUseCase';
import CreateUserValidator from '@/app/validator/CreateUserValidator';
import ListUserValidator from '@/app/validator/ListUserValidator';
import BaseController from '@/infra/controller/BaseController';
import UserGateway from '../gateways/UserGateway';

export default class UserController extends BaseController {
	async create(req: HttpRequest<CreateUserRequest>): Promise<HttpResponse<CreateUserResponse>> {
		const validator = new CreateUserValidator();
		const userGateway = new UserGateway();
		const userUseCase = new CreateUserUseCase(userGateway, validator);
		return await this.useCase(req, userUseCase);
	}

	async loginUser(req: HttpRequest<LoginUserRequest>): Promise<HttpResponse<LoginUserResponse>> {
		const userGateway = new UserGateway();
		const loginUserCase = new LoginUserUseCase(userGateway);
		return await this.useCase(req, loginUserCase);
	}

	async userAll(req: HttpRequest<object>): Promise<HttpResponse<ListUserResponse>> {
		const userGateway = new UserGateway();
		const listUserValidator = new ListUserValidator();
		const listUserAll = new ListUserUseCase(userGateway, listUserValidator);
		return await this.useCase(req, listUserAll);
	}
}
