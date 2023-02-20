import { IAcademicGateway } from '@/app/protocol/gateways/AcademicGateway';
import { Academic } from '../database/sequelize/models/Academic';

export default class AcademicGateway implements IAcademicGateway {
	async create(input: IAcademicGateway.Request): Promise<IAcademicGateway.Response> {
		const response = await Academic.create(input);
		return response.get({ plain: true });
	}
}
