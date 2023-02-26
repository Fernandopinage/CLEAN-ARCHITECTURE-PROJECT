import { cnpj } from 'cpf-cnpj-validator';
import removeCharacters from '@/app/utils/RemoverCaractersLeaveNumber';
export default class CnpjUtils {
	static remove(input: string) {
		return removeCharacters(input);
	}

	static isValid(input: string): boolean {
		return cnpj.isValid(this.remove(input));
	}
}
