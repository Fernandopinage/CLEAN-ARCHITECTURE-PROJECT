import { HttpRequest, HttpResponse } from '@/app/dto';

export interface IListUserValidator {
	validator(input: HttpRequest<void>): HttpResponse<number>;
}
