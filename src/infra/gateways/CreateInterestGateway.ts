import { ICreateInterestGateway } from '@/app/protocol/gateways/ICreateInterestGateway';
import { Interest } from '../database/sequelize/models/Interest';

export default class CreateInterestGateway implements ICreateInterestGateway {
	async create(input: ICreateInterestGateway.Request): Promise<ICreateInterestGateway.Response> {
		const response = await Interest.create(input);
		return response.get({ plain: true });
	}
}
