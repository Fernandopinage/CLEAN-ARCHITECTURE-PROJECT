import { ICreateAddressUseCase } from '@/app/protocol/ICreateAddressUseCase';
import { AddressDomain } from '@/domain/entities/AddressDomain';
import { HttpRequest, HttpResponse } from '../../dto';
import { CreateAddressRequest } from '../../dto/address/CreateAddressRequest';
import { CreateAddressResponse } from '../../dto/address/CreateAddressResponse';
import { IAddressGateway } from '../../protocol/gateways/IAddressGateway';
import StatusCode from '../../status/StatusCode';

export default class CreateAddressUseCase implements ICreateAddressUseCase {
	constructor(private addressGateway: IAddressGateway) {}
	async execute(input: HttpRequest<CreateAddressRequest>): Promise<HttpResponse<CreateAddressResponse>> {
		const addressResult = AddressDomain.execute({
			id_user: input.body.id_user,
			cep: input.body.cep,
			uf: input.body.uf,
			city: input.body.city,
			neighborhood: input.body.neighborhood,
			number: input.body.number,
			public_place: input.body.public_place,
			complement: input.body.complement
		});

		const response = await this.addressGateway.create(addressResult.parms);
		return {
			statusCode: StatusCode.created,
			body: {
				id: response.id
			}
		};
	}
}
