export interface IExperienceGateway {
	create(input: IExperienceGateway.Request): Promise<IExperienceGateway.Response>;
}

export namespace IExperienceGateway {
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
