export interface IUtvGateway {
	create(input: IUtvGateway.Request): Promise<IUtvGateway.Response>;
}

export namespace IUtvGateway {
	export type Request = {
		id_user: number;
		name: string;
		workload: string;
		data_certificate: string;
		occupation_area: string;
	};
	export type Response = {
		id?: number;
	};
}
