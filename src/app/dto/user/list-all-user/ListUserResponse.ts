export interface ListUserResponse {
	list?: Array<{
		id: number;
		first_name: string;
		second_name: string;
		email: string;
		phone: string;
		pcd: boolean;
		year: string;
	}>;
	count?: number;
}
