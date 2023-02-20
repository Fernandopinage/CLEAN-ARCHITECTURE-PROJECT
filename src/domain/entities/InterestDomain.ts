import { InterestProtocol } from '../protocol/InterestProtocol';

export default class InterestDomain {
	constructor(public parms: InterestProtocol) {}
	static execute(parms: InterestProtocol): InterestDomain {
		return new InterestDomain(parms);
	}
}
