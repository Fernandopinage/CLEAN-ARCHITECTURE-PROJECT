import { CreateAddressRequest, CreateUserResponse, HttpRequest, HttpResponse } from '@/app/dto';
import CreateAddressUseCase from '@/app/usecase/address/CreateAddressUseCase';
import AddressGateway from '../gateways/AddressGateway';
import BaseController from './BaseController';

export default class AddressController extends BaseController {
	async create(req: HttpRequest<CreateAddressRequest>): Promise<HttpResponse<CreateUserResponse>> {
		const addressGateway = new AddressGateway();
		const addressUseCase = new CreateAddressUseCase(addressGateway);
		return await this.createUseCase(req, addressUseCase);
	}
}
