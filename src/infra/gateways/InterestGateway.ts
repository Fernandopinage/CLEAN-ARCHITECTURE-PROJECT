import { IInterestGateway } from '@/app/protocol/gateways/IInterestGateway';
import { Interest } from '../database/sequelize/models/Interest';

export default class InterestGateway implements IInterestGateway {
	async create(input: IInterestGateway.Request): Promise<IInterestGateway.Response> {
		const response = await Interest.create(input);
		return response.get({ plain: true });
	}
}
