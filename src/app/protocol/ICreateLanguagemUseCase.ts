import { HttpRequest, HttpResponse, CreateLanguagemRequest, CreateLanguagemResponse } from '../dto';

export interface ICreateLanguagemUseCase {
	execute(input: HttpRequest<CreateLanguagemRequest>): Promise<HttpResponse<CreateLanguagemResponse>>;
}
