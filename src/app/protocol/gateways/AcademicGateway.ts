export interface IAcademicGateway {
	create(input: IAcademicGateway.Request): Promise<IAcademicGateway.Response>;
}

export namespace IAcademicGateway {
	export type Request = {
		id?: number;
		id_user: number;
		training: string;
		institution: string;
		name: string;
		completion_year: string;
		start_year: string;
		period: string;
	};
	export type Response = {
		id?: number;
	};
}
