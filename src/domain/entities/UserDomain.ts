import { UserProtocol } from '../protocol/UserProtocol';

export class UserDomain {
	constructor(public parms: UserProtocol) {}

	static execute(parms: UserProtocol): UserDomain {
		return new UserDomain(parms);
	}
}
