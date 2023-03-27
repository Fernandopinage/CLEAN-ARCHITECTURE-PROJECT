import { HttpRequest, HttpResponse } from '@/app/dto';
import { ListUserResponse } from '@/app/dto/user/list-all-user/ListUserResponse';
import { IUserGateway } from '@/app/protocol/gateways/IUserGateway';
import { IListUserUseCase } from '@/app/protocol/IListUserUseCase';
import StatusCode from '@/app/status/StatusCode';
import JwtToken from '@/app/utils/JwtToken';

export default class ListUserUseCase implements IListUserUseCase {
	constructor(private userGateway: IUserGateway) {}
	async execute(input: HttpRequest<void>): Promise<HttpResponse<ListUserResponse>> {
		const token = JwtToken.verifyToken(input.headers.token);
		console.log('>>>>>>', token);
		const response = await this.userGateway.listAll();
		return {
			body: {
				list: response.list,
				count: response.total
			},
			statusCode: StatusCode.ok
		};
	}
}
