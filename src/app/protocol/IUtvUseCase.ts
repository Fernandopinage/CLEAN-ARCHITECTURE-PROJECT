import { CreateUserRequest, CreateUserResponse, HttpRequest } from '../dto';

export interface IUtvUseCase {
	execute(input: HttpRequest<CreateUserRequest>): Promise<HttpRequest<CreateUserResponse>>;
}
