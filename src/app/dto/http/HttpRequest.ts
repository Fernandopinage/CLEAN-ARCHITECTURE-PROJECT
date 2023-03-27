export type HttpRequest<T> = {
	body?: T;
	headers?: {
		token: string;
	};
};
