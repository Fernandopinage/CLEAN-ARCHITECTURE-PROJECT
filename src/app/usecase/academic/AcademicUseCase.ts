import AcademicDomain from '@/domain/entities/AcademicDomain';
import { CreateAcademicRequest, CreateAcademicResponse, HttpRequest, HttpResponse } from '../../dto';
import { IAcademicGateway } from '../../protocol/gateways/IAcademicGateway';
import { IAcademicUseCase } from '../../protocol/IAcademicUseCase';
import StatusCode from '../../status/StatusCode';

export default class AcademicUseCase implements IAcademicUseCase {
	constructor(private academicGateway: IAcademicGateway) {}
	async execute(input: HttpRequest<CreateAcademicRequest>): Promise<HttpResponse<CreateAcademicResponse>> {
		const academicResult = AcademicDomain.execute({
			id_user: input.body.id_user,
			training: input.body.training,
			institution: input.body.institution,
			name: input.body.name,
			completion_year: input.body.completion_year,
			start_year: input.body.start_year,
			period: input.body.period
		});

		const response = await this.academicGateway.create(academicResult.parms);

		return {
			body: {
				id: response.id
			},
			statusCode: StatusCode.created
		};
	}
}
