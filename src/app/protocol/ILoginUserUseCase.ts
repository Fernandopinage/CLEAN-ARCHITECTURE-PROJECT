import { HttpRequest, HttpResponse, LoginUserRequest, LoginUserResponse } from '../dto';

export interface ILoginUserUseCase {
	execute(input: HttpRequest<LoginUserRequest>): Promise<HttpResponse<LoginUserResponse>>;
}
