export interface ILanguagemGateway {
	create(input: ILanguagemGateway.Request): Promise<ILanguagemGateway.Response>;
}

export namespace ILanguagemGateway {
	export type Request = {
		id_user: number;
		language: string;
		level_writing: string;
		level_reading: string;
		level_conversation: string;
	};
	export type Response = {
		id?: number;
	};
}
