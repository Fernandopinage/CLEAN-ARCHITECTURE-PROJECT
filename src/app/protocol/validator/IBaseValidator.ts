export default interface IBaseValidator<TInput, TOutput> {
	validator(input: TInput): TOutput;
}
