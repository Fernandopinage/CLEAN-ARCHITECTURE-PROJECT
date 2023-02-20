import { ICourseGateway } from '@/app/protocol/gateways/ICourseGateway';
import { Course } from '../database/sequelize/models/Course';

export default class CourseGateway implements ICourseGateway {
	async create(input: ICourseGateway.Request): Promise<ICourseGateway.Response> {
		const response = await Course.create(input);
		return response.get({ plain: true });
	}
}
