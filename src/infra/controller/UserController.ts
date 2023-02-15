import { HttpRequest, CreateUserRequest, HttpResponse, CreateUserResponse } from '@/app/dto';
import UserUseCase from '@/app/usecase/UserUseCase';
import BaseController from '@/infra/controller/BaseController';

export default class UserController extends BaseController {
	async create(req: HttpRequest<CreateUserRequest>): Promise<HttpResponse<CreateUserResponse>> {
		const userUseCase = new UserUseCase();
		return await this.createUseCase(req, userUseCase);
	}
}
