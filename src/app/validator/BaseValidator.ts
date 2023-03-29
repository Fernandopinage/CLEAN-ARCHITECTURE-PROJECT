import IBaseValidator from '../protocol/validator/IBaseValidator';
import JwtToken from '../utils/JwtToken';

export abstract class BaseValidator<TInput, TOutput> implements IBaseValidator<TInput, TOutput> {
	abstract validator(input: TInput): TOutput;
	protected auth(input: string): boolean {
		try {
			JwtToken.verifyToken(input);
			return true;
		} catch (error) {
			console.log('>>>>', error);
			return false;
		}
	}
}
