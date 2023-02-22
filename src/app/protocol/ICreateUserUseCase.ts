import { CreateUserRequest, CreateUserResponse, HttpRequest, HttpResponse } from '../dto';

export interface ICreateUserUseCase {
	execute(input: HttpRequest<CreateUserRequest>): Promise<HttpResponse<CreateUserResponse>>;
}
