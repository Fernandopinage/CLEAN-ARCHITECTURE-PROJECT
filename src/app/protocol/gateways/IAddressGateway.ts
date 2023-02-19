export interface IAddressGateway {
	create(input: IAddressGateway.Request): Promise<IAddressGateway.Response>;
}

export namespace IAddressGateway {
	export type Request = {
		id_user: number;
		cep: string;
		uf: string;
		city: string;
		neighborhood: string;
		number: string;
		public_place?: string;
		complement?: string;
	};
	export type Response = {
		id?: number;
	};
}
