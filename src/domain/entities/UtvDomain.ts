import { UtvProtocols } from '../protocol/UtvProtocols';

export default class UtvDomain {
	constructor(public parms: UtvProtocols) {}

	static execute(parms: UtvProtocols): UtvDomain {
		return new UtvDomain(parms);
	}
}
