import { LanguageProtocol } from '../protocol/LanguageProtocol';

export default class LanguageDomain {
	constructor(public parms: LanguageProtocol) {}

	static execute(parms: LanguageProtocol): LanguageDomain {
		return new LanguageDomain(parms);
	}
}
