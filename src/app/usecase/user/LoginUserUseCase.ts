import { HttpRequest, HttpResponse, LoginUserRequest, LoginUserResponse } from '@/app/dto';
import { IUserGateway } from '@/app/protocol/gateways/IUserGateway';
import { ILoginUserUseCase } from '@/app/protocol/ILoginUserUseCase';
import StatusCode from '@/app/status/StatusCode';
import JwtToken from '@/app/utils/JwtToken';

export default class LoginUserUseCase implements ILoginUserUseCase {
	constructor(private userGateway: IUserGateway) {}
	async execute(input: HttpRequest<LoginUserRequest>): Promise<HttpResponse<LoginUserResponse>> {
		const response = await this.userGateway.loginUser({
			where: { email: input.body.email, password: input.body.password }
		});

		return {
			body: {
				token: this.token({
					id: response.list[0].parms.id,
					name: response.list[0].parms.first_name,
					email: response.list[0].parms.email
				})
			},
			statusCode: StatusCode.ok
		};
	}

	private token(input: object): string {
		return JwtToken.generateToken(input);
	}
}
