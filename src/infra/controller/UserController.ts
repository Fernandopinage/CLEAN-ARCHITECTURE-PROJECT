import { HttpRequest, CreateUserRequest, HttpResponse, CreateUserResponse } from '@/app/dto';
import UserUseCase from '@/app/usecase/UserUseCase';
import BaseController from '@/infra/controller/BaseController';
import AddressGateway from '../gateways/AddressGateway';
import UserGateway from '../gateways/UserGateway';

export default class UserController extends BaseController {
	async create(req: HttpRequest<CreateUserRequest>): Promise<HttpResponse<CreateUserResponse>> {
		const userGateway = new UserGateway();
		const addressGateway = new AddressGateway();
		const userUseCase = new UserUseCase(userGateway, addressGateway);
		return await this.createUseCase(req, userUseCase);
	}
}
