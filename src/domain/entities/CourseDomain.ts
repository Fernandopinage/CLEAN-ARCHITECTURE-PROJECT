import { CourseProtocols } from '../protocol/CourseProtocols';

export default class CourseDomain {
	constructor(public parms: CourseProtocols) {}

	static execute(parms: CourseProtocols): CourseDomain {
		return new CourseDomain(parms);
	}
}
