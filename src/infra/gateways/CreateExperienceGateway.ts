import { ICreateExperienceGateway } from '@/app/protocol/gateways/ICreateExperienceGateway';
import { Experience } from '../database/sequelize/models/Experience';

export default class CreateExperienceGateway implements ICreateExperienceGateway {
	async create(input: ICreateExperienceGateway.Request): Promise<ICreateExperienceGateway.Response> {
		const response = await Experience.create(input);
		return response.get({ plain: true });
	}
}
