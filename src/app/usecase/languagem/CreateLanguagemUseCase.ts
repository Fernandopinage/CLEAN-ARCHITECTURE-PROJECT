import { CreateLanguagemRequest, CreateLanguagemResponse, HttpRequest, HttpResponse } from '@/app/dto';
import { ILanguagemGateway } from '@/app/protocol/gateways/ILanguagemGateway';
import { ICreateLanguagemUseCase } from '@/app/protocol/ICreateLanguagemUseCase';
import StatusCode from '@/app/status/StatusCode';
import LanguageDomain from '@/domain/entities/LanguagemDomain';

export default class CreateLanguagemUseCase implements ICreateLanguagemUseCase {
	constructor(private languagemGateway: ILanguagemGateway) {}
	async execute(input: HttpRequest<CreateLanguagemRequest>): Promise<HttpResponse<CreateLanguagemResponse>> {
		const languagemCreate = LanguageDomain.execute({
			id_user: input.body.id_user,
			language: input.body.language,
			level_writing: input.body.level_writing,
			level_reading: input.body.level_reading,
			level_conversation: input.body.level_conversation
		});
		const response = await this.languagemGateway.create(languagemCreate.parms);
		return {
			body: {
				id: response.id
			},
			statusCode: StatusCode.created
		};
	}
}
