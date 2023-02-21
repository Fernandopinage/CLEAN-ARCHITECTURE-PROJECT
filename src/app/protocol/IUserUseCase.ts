import { CreateUserRequest, CreateUserResponse, HttpRequest, HttpResponse } from '../dto';

export interface IUserUseCase {
	execute(input: HttpRequest<CreateUserRequest>): Promise<HttpResponse<CreateUserResponse>>;
}
