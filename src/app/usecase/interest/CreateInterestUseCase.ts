import { CreateInterestRequest, CreateInterestResponse, HttpRequest, HttpResponse } from '@/app/dto';
import { IInterestGateway } from '@/app/protocol/gateways/IInterestGateway';
import { ICreateInterestUseCase } from '@/app/protocol/ICreateInterestUseCase';
import StatusCode from '@/app/status/StatusCode';
import InterestDomain from '@/domain/entities/InterestDomain';

export default class CreateInterestUseCase implements ICreateInterestUseCase {
	constructor(private interestGateway: IInterestGateway) {}
	async execute(input: HttpRequest<CreateInterestRequest>): Promise<HttpResponse<CreateInterestResponse>> {
		const interestCreate = InterestDomain.execute({
			id_user: input.body.id_user,
			professional_interest: input.body.professional_interest
		});
		const reponse = await this.interestGateway.create(interestCreate.parms);
		return {
			body: {
				id: reponse.id
			},
			statusCode: StatusCode.created
		};
	}
}
