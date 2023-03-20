import { CreateUserRequest, HttpRequest, HttpResponse } from '@/app/dto';

export interface IUserValidator {
	validator(input: HttpRequest<CreateUserRequest>): HttpResponse<number>;
}
