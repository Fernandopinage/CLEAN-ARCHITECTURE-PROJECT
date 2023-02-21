export interface CreateLanguagemRequest {
	id?: number;
	id_user: number;
	language: string;
	level_writing: string;
	level_reading: string;
	level_conversation: string;
}
