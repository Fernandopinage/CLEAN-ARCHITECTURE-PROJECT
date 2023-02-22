import { HttpRequest, HttpResponse, CreateUtvRequest, CreateUtvResponse } from '@/app/dto';
import { IUtvGateway } from '@/app/protocol/gateways/IUtvGateway';
import { ICreateUtvUseCase } from '@/app/protocol/ICreateUtvUseCase';
import StatusCode from '@/app/status/StatusCode';
import UtvDomain from '@/domain/entities/UtvDomain';

export default class CreateUtvUseCase implements ICreateUtvUseCase {
	constructor(private utvGateway: IUtvGateway) {}
	async execute(input: HttpRequest<CreateUtvRequest>): Promise<HttpResponse<CreateUtvResponse>> {
		const utvCreate = UtvDomain.execute({
			id_user: input.body.id_user,
			name: input.body.name,
			workload: input.body.workload,
			data_certificate: input.body.data_certificate,
			occupation_area: input.body.occupation_area
		});

		const response = await this.utvGateway.create(utvCreate.parms);
		return {
			body: {
				id: response.id
			},
			statusCode: StatusCode.created
		};
	}
}
