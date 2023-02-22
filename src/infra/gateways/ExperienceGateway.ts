import { IExperienceGateway as IExperienceGateway } from '@/app/protocol/gateways/IExperienceGateway';
import { Experience } from '../database/sequelize/models/Experience';

export default class ExperienceGateway implements IExperienceGateway {
	async create(input: IExperienceGateway.Request): Promise<IExperienceGateway.Response> {
		const response = await Experience.create(input);
		return response.get({ plain: true });
	}
}
