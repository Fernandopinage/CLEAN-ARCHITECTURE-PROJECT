export type HttpResponse<T> = {
	statusCode: number;
	errors?: ErrorMessage[];
	body?: T;
};

export interface ErrorMessage {
	message: string;
	code: string;
}
