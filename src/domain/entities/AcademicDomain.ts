import { AcademicProtocol } from '../protocol/AcademicProtocol';

export default class AcademicDomain {
	constructor(public parms: AcademicProtocol) {}
	static execute(parms: AcademicProtocol): AcademicDomain {
		return new AcademicDomain(parms);
	}
}
