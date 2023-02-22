import { CreateCourseRequest, CreateCourseResponse, HttpRequest, HttpResponse } from '@/app/dto';
import { ICourseGateway } from '@/app/protocol/gateways/ICourseGateway';
import { ICreateCourseUseCase } from '@/app/protocol/ICreateCourseUseCase';
import StatusCode from '@/app/status/StatusCode';
import CourseDomain from '@/domain/entities/CourseDomain';

export default class CreateCourseUseCase implements ICreateCourseUseCase {
	constructor(private courseGateway: ICourseGateway) {}
	async execute(input: HttpRequest<CreateCourseRequest>): Promise<HttpResponse<CreateCourseResponse>> {
		const courseResult = CourseDomain.execute({
			id_user: input.body.id_user,
			extracurricular_courses: input.body.extracurricular_courses,
			workload: input.body.workload,
			data_certificate: input.body.data_certificate,
			occupation_area: input.body.occupation_area,
			educational_institution: input.body.educational_institution,
			certified_url: input.body.certified_url
		});
		const reponse = await this.courseGateway.create(courseResult.parms);
		return {
			statusCode: StatusCode.created,
			body: {
				id: reponse.id
			}
		};
	}
}
