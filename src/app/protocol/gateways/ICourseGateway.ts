export interface ICourseGateway {
	create(_input: ICourseGateway.Request): Promise<ICourseGateway.Response>;
}

export namespace ICourseGateway {
	export type Request = {
		id?: number;
		id_user: number;
		extracurricular_courses: string;
		workload: string;
		data_certificate: string;
		occupation_area: string;
		educational_institution: string;
		certified_url: string;
	};

	export type Response = {
		id?: number;
	};
}
