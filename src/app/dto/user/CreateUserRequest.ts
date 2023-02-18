export interface CreateUserRequest {
	id?: number;
	first_name: string;
	second_name: string;
	email: string;
	password: string;
	phone: string;
	pcd: boolean;
	rg: string;
	cpf: string;
	year: string;
	birth_place: string;
	color_race: string;
	Weight: string;
	height: string;
	marital_status: string;
	children: boolean;
	gender: string;
	salary_expectation: number;
	military_experience: boolean;
}
