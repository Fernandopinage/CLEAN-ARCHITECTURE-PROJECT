export interface ICreateInterestGateway {
	create(input: ICreateInterestGateway.Request): Promise<ICreateInterestGateway.Response>;
}

export namespace ICreateInterestGateway {
	export type Request = {
		id?: number;
		id_user: number;
		professional_interest: string;
	};

	export type Response = {
		id?: number;
	};
}
