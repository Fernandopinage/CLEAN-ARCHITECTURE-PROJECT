import { HttpRequest, HttpResponse } from '../dto';
import { ListUserResponse } from '../dto/user/list-all-user/ListUserResponse';

export interface IListUserUseCase {
	execute(input: HttpRequest<void>): Promise<HttpResponse<ListUserResponse>>;
}
