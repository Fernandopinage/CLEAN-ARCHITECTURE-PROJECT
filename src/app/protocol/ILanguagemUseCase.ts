import { HttpRequest, HttpResponse, CreateLanguagemRequest, CreateLanguagemResponse } from '../dto';

export interface ILanguagemUseCase {
	execute(input: HttpRequest<CreateLanguagemRequest>): Promise<HttpResponse<CreateLanguagemResponse>>;
}
