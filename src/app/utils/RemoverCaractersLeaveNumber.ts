class RemoverCaractersLeaveNumber {
	removeCharacters(input: string) {
		const remove = /[^0-9]/gi;
		return input.replace(remove, '');
	}
}

export default new RemoverCaractersLeaveNumber().removeCharacters;
