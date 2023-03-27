import { HttpRequest, HttpResponse } from '@/app/dto';
import { IUserGateway } from '@/app/protocol/gateways/IUserGateway';
import { IAuthUseCase } from '@/app/protocol/IAuthUseCase';
import StatusCode from '@/app/status/StatusCode';
import JwtToken from '@/app/utils/JwtToken';

export default class AuthUseCase implements IAuthUseCase {
	constructor(private userGateway: IUserGateway) {}
	async execute(input: HttpRequest<string>): Promise<HttpResponse<void>> {
		const token = JwtToken.verifyToken(input.body);
		console.log('::::', token);

		await this.userGateway.loginUser({});
		console.log(input);
		return {
			statusCode: StatusCode.ok
		};
	}
}
