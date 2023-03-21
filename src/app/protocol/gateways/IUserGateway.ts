export interface IUserGateway {
	create(input: IUserGateway.Request): Promise<IUserGateway.Response>;
	loginUser(input: IUserGateway.LoginRequest): Promise<object>;
}

export namespace IUserGateway {
	export type Request = {
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
	};

	export type Response = {
		id: number;
	};

	export type LoginRequest = {
		email: string;
		password: string;
	};
	// export type LoginResponse = {
	// 	id: number;
	// 	name: string;
	// 	email: string;
	// };
}
