import { IUserGateway } from '@/app/protocol/gateways/IUserGateway';
import { User } from '../database/sequelize/models/User';

export default class UserGateway implements IUserGateway {
	async create(input: IUserGateway.Request): Promise<IUserGateway.Response> {
		const response = await User.create(input);
		return response.get({ plain: true });
	}

	async loginUser(input: IUserGateway.LoginRequest): Promise<object> {
		const users = await User.findAll({
			where: {
				email: input.email,
				password: input.password
			}
		});
		return users;
	}
}
