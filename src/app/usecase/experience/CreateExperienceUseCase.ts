import { CreateExperienceRequest, CreateExperienceResponse, HttpRequest, HttpResponse } from '@/app/dto';
import { ICreateExperienceGateway } from '@/app/protocol/gateways/ICreateExperienceGateway';
import { ICreateExperienceUseCase } from '@/app/protocol/ICreateExperienceUseCase';
import StatusCode from '@/app/status/StatusCode';
import ExperienceDomain from '@/domain/entities/ExperienceDomain';

export default class CreateExperienceUseCase implements ICreateExperienceUseCase {
	constructor(private createExperienceGateway: ICreateExperienceGateway) {}
	async execute(input: HttpRequest<CreateExperienceRequest>): Promise<HttpResponse<CreateExperienceResponse>> {
		const createExperienceCreate = ExperienceDomain.execute({
			id_user: input.body.id_user,
			first_job: input.body.first_job,
			company_name: input.body.company_name,
			office: input.body.office,
			company_current: input.body.company_current,
			data_start: input.body.data_start,
			date_final: input.body.date_final,
			wage: input.body.wage,
			developed_activity: input.body.developed_activity
		});

		const reponse = await this.createExperienceGateway.create(createExperienceCreate.parms);

		return {
			body: {
				id: reponse.id
			},
			statusCode: StatusCode.created
		};
	}
}
