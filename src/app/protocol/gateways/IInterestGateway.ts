export interface IInterestGateway {
	create(input: IInterestGateway.Request): Promise<IInterestGateway.Response>;
}

export namespace IInterestGateway {
	export type Request = {
		id?: number;
		id_user: number;
		professional_interest: string;
	};

	export type Response = {
		id?: number;
	};
}
