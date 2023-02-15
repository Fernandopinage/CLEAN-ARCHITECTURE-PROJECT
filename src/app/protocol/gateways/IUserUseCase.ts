import { HttpRequest, HttpResponse, CreateUserRequest, CreateUserResponse } from '@/app/dto';

export interface IUserUseCase {
	create(_input: HttpRequest<CreateUserRequest>): Promise<HttpResponse<CreateUserResponse>>;
}
