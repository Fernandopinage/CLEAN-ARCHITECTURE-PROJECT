import { IUtvGateway } from '@/app/protocol/gateways/IUtvGateway';
import { Utv } from '../database/sequelize/models/Utv';

export default class UtvGateway implements IUtvGateway {
	async create(input: IUtvGateway.Request): Promise<IUtvGateway.Response> {
		const response = await Utv.create(input);
		return response.get({ plain: true });
	}
}
