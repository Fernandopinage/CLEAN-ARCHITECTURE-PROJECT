import { CreateUserRequest, HttpRequest, HttpResponse } from '@/app/dto';

export interface ICreateUserValidator {
	validator(input: HttpRequest<CreateUserRequest>): HttpResponse<number>;
}
