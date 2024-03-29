import { HttpRequest, HttpResponse } from '@/app/dto';
import { ListUserResponse } from '@/app/dto/user/list-all-user/ListUserResponse';
import { IUserGateway } from '@/app/protocol/gateways/IUserGateway';
import { IListUserUseCase } from '@/app/protocol/IListUserUseCase';
import { IListUserValidator } from '@/app/protocol/validator/IListUserValidator';
import StatusCode from '@/app/status/StatusCode';

export default class ListUserUseCase implements IListUserUseCase {
	constructor(private userGateway: IUserGateway, private listUserValidator: IListUserValidator) {}
	async execute(input: HttpRequest<void>): Promise<HttpResponse<ListUserResponse>> {
		const validator = this.listUserValidator.validator(input);
		if (validator.statusCode !== 0) {
			return {
				errors: validator.errors,
				statusCode: validator.statusCode
			};
		}
		const response = await this.userGateway.listByNotParms();
		return {
			body: {
				list: response.list.map((e) => ({
					id: e.parms.id,
					first_name: e.parms.first_name,
					second_name: e.parms.second_name,
					year: e.parms.year,
					email: e.parms.email,
					pcd: e.parms.pcd,
					phone: e.parms.phone
				})),
				count: response.total
			},
			statusCode: StatusCode.ok
		};
	}
}
