export interface AddressProtocol {
	id?: number;
	id_user: number;
	cep: string;
	uf: string;
	city: string;
	neighborhood: string;
	number: string;
	public_place?: string;
	complement?: string;
}
