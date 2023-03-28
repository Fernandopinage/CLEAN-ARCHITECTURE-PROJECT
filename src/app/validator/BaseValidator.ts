import IBaseValidator from '../protocol/validator/IBaseValidator';

export abstract class BaseValidator<TInput, TOutput> implements IBaseValidator<TInput, TOutput> {
	abstract validator(input: TInput): TOutput;
	protected abstract auth(input: string): boolean;
}
