import { ExperienceProtocol } from '../protocol/ExperienceProtocol';

export default class ExperienceDomain {
	constructor(public parms: ExperienceProtocol) {}
	static execute(parms: ExperienceProtocol): ExperienceDomain {
		return new ExperienceDomain(parms);
	}
}
