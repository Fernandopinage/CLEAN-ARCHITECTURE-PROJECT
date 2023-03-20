import { CreateAddressRequest, HttpRequest, HttpResponse } from '@/app/dto';
export interface IAddressValidator {
	validator(input: HttpRequest<CreateAddressRequest>): HttpResponse<number>;
}
