import { HttpRequest, HttpResponse, LoginUserRequest, LoginUserResponse } from '@/app/dto';
import { IUserGateway } from '@/app/protocol/gateways/IUserGateway';
import { ILoginUserUseCase } from '@/app/protocol/ILoginUserUseCase';
import StatusCode from '@/app/status/StatusCode';

export default class LoginUserUseCase implements ILoginUserUseCase {
	constructor(private userGateway: IUserGateway) {}
	async execute(input: HttpRequest<LoginUserRequest>): Promise<HttpResponse<LoginUserResponse>> {
		const response = await this.userGateway.loginUser({
			where: { email: input.body.email, password: input.body.password }
		});

		return {
			body: {
				token: response.list
			},
			statusCode: StatusCode.ok
		};
	}
}
