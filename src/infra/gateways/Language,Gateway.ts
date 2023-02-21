import { ILanguagemGateway } from '@/app/protocol/gateways/ILanguagemGateway';
import { Language } from '../database/sequelize/models/language';

export default class LanguagemGateway implements ILanguagemGateway {
	async create(input: ILanguagemGateway.Request): Promise<ILanguagemGateway.Response> {
		const response = await Language.create(input);
		return response.get({ plain: true });
	}
}
