export interface CreateAddressRequest {
	id_user: number;
	cep: string;
	uf: string;
	city: string;
	neighborhood: string;
	number: string;
	public_place?: string;
	complement?: string;
}
