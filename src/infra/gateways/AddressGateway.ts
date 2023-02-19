import { IAddressGateway } from '@/app/protocol/gateways/IAddressGateway';
import { Address } from '../database/sequelize/models/Address';

export default class AddressGateway implements IAddressGateway {
	async create(input: IAddressGateway.Request): Promise<IAddressGateway.Response> {
		const response = await Address.create(input);
		return response.get({ plain: true });
	}
}
