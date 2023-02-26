import { cpf } from 'cpf-cnpj-validator';
import removeCharacters from '@/app/utils/RemoverCaractersLeaveNumber';

export default class CpfUtils {
	static remove(input: string) {
		return removeCharacters(input);
	}
	static isValid(input: string): boolean {
		return cpf.isValid(this.remove(input));
	}
}
