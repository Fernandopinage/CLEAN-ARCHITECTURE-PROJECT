import { IUserUseCase } from '@/app/protocol/gateways/IUserUseCase';
import { HttpRequest, HttpResponse, CreateUserRequest, CreateUserResponse } from '../dto';
import { UserDomain } from '@/domain/entities/UserDomain';
import StatusCode from '../status/StatusCode';

export default class UserUseCase implements IUserUseCase {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	async create(input: HttpRequest<CreateUserRequest>): Promise<HttpResponse<CreateUserResponse>> {
		const result = UserDomain.execute({
			first_name: input.body.first_name,
			second_name: input.body.second_name,
			email: input.body.email,
			password: input.body.password,
			phone: input.body.phone,
			pcd: input.body.pcd,
			rg: input.body.rg,
			cpf: input.body.cpf,
			year: input.body.year,
			birth_place: input.body.birth_place,
			color_race: input.body.color_race,
			Weight: input.body.Weight,
			height: input.body.height,
			marital_status: input.body.marital_status,
			children: input.body.children,
			gender: input.body.gender,
			salary_expectation: input.body.salary_expectation,
			military_experience: input.body.military_experience
		});
		console.log('>>>>>', result.parms);

		return {
			statusCode: StatusCode.created
		};
	}
}
