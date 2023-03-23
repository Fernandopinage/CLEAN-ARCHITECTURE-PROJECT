import { IUserGateway } from '@/app/protocol/gateways/IUserGateway';
import { User } from '../database/sequelize/models/User';

export default class UserGateway implements IUserGateway {
	async create(input: IUserGateway.Request): Promise<IUserGateway.Response> {
		const response = await User.create(input);
		return response.get({ plain: true });
	}

	async loginUser(configure: IUserGateway.QueryRequest): Promise<IUserGateway.LoginResponse> {
		const { email, password } = configure.where;
		return this.listBy({ email, password });
	}

	private async listBy(input: IUserGateway.LoginRequest): Promise<IUserGateway.LoginResponse> {
		const { rows } = await User.findAndCountAll({
			where: {
				email: input.email,
				password: input.password
			}
		});
		return {
			list: User.mapperArrayToDomain(rows)
		};
	}
}
