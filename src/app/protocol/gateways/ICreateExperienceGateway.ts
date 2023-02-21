export interface ICreateExperienceGateway {
	create(input: ICreateExperienceGateway.Request): Promise<ICreateExperienceGateway.Response>;
}

export namespace ICreateExperienceGateway {
	export type Request = {
		id?: number;
		id_user: number;
		first_job: boolean;
		company_name: string;
		office: string;
		company_current: boolean;
		data_start: Date;
		date_final: Date;
		wage: string;
		developed_activity: Text;
	};
	export type Response = {
		id?: number;
	};
}
