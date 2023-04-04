import { IUserGateway } from '@/app/protocol/gateways/IUserGateway';
import { User } from '../database/sequelize/models/User';

export default class UserGateway implements IUserGateway {
	async create(input: IUserGateway.Request): Promise<IUserGateway.Response> {
		const response = await User.create(input);
		return response.get({ plain: true });
	}

	async loginUser(configure: IUserGateway.QueryRequest): Promise<IUserGateway.LoginResponse> {
		return this.listByParms({ where: configure.where });
	}

	async listByNotParms(): Promise<IUserGateway.LoginResponse> {
		return await this.listAll({});
	}

	private async listByParms(input: IUserGateway.QueryRequest): Promise<IUserGateway.LoginResponse> {
		return await this.listAll(input);
	}

	private async listAll(input: IUserGateway.QueryRequest) {
		const { rows, count } = await User.findAndCountAll({
			where: input.where
		});
		return {
			list: User.mapperArrayToDomain(rows),
			total: count
		};
	}
}
