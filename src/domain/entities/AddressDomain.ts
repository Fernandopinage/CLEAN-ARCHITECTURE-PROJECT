import { AddressProtocol } from '../protocol/AddressProtocol';

export class AddressDomain {
	constructor(public parms: AddressProtocol) {}

	static execute(parms: AddressProtocol): AddressDomain {
		return new AddressDomain(parms);
	}
}
