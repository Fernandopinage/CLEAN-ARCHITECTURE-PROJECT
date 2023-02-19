import { HttpRequest, HttpResponse } from '../dto';
import { CreateAddressRequest } from '../dto/address/CreateAddressRequest';
import { CreateAddressResponse } from '../dto/address/CreateAddressResponse';

export interface IAddressUseCase {
	execute(input: HttpRequest<CreateAddressRequest>): Promise<HttpResponse<CreateAddressResponse>>;
}
