import { IUserUseCase } from '@/app/protocol/gateways/IUserUseCase';
import { HttpRequest, HttpResponse, CreateUserRequest, CreateUserResponse } from '../dto';
import { UserDomain } from '@/domain/entities/UserDomain';
import StatusCode from '../status/StatusCode';

export default class UserUseCase implements IUserUseCase {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	async create(input: HttpRequest<CreateUserRequest>): Promise<HttpResponse<CreateUserResponse>> {
		const result = UserDomain.execute({
			cpf: input.body.cpf,
			name: input.body.name,
			rg: input.body.rg,
			year: input.body.year
		});
		console.log('>>>>>', result.parms);

		return {
			statusCode: StatusCode.created
		};
	}
}
