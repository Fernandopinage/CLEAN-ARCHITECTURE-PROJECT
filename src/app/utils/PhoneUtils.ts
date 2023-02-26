import removeCharacters from '@/app/utils/RemoverCaractersLeaveNumber';
export default class PhoneUtils {
	static remove(input: string) {
		return removeCharacters(input);
	}
	static isValid(input: string): boolean {
		return this.remove(input).length <= 10;
	}
}
