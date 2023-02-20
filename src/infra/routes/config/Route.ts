import cors from 'cors';
import * as dotenv from 'dotenv';
import express from 'express';
import UserRoute from '@/infra/routes/UserRoute';
import AddressRoute from '@/infra/routes/AddressRoute';
import AcademicRoute from '@/infra/routes/AcademicRoute';
import CourseRoute from '@/infra/routes/CourseRoute';
dotenv.config();

const port = process.env.PORT;
const host = process.env.HOST;

export default class Route {
	public app: express.Application;

	static instance: Route;

	static getInstance() {
		if (this.instance === undefined) {
			return new Route();
		}
		return this.instance;
	}

	private constructor() {
		this.app = express();
		this.setMiddlewares();
		this.setRoutes();
	}

	private setMiddlewares(): void {
		this.app.use(express.json());
		this.app.use(
			cors({
				methods: ['GET', 'POST', 'PUT', 'DELETE'],
				origin: process.env.HOST_CLIENT
			})
		);
	}

	private setRoutes(): void {
		UserRoute.route(this.app);
		AddressRoute.route(this.app);
		AcademicRoute.route(this.app);
		CourseRoute.route(this.app);
	}

	listen() {
		this.app.listen(port, () => {
			console.log(`${host}:${port}`);
		});
	}
}
