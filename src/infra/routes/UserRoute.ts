import express from 'express';
import UserController from '@/infra/controller/UserController';
class UserRoute {
	route(app: express.Application) {
		const userController = new UserController();
		app.post('/api/v1/users', async (req, res) => {
			const response = await userController.create({
				body: {
					first_name: req.body.first_name,
					second_name: req.body.second_name,
					email: req.body.email,
					password: req.body.password,
					phone: req.body.phone,
					pcd: req.body.pcd,
					rg: req.body.rg,
					cpf: req.body.cpf,
					year: req.body.year,
					birth_place: req.body.birth_place,
					color_race: req.body.color_race,
					Weight: req.body.Weight,
					height: req.body.height,
					marital_status: req.body.marital_status,
					children: req.body.children,
					gender: req.body.gender,
					salary_expectation: req.body.salary_expectation,
					military_experience: req.body.military_experience
				}
			});
			res.status(response.statusCode);
			res.json(response.errors || response.body);
		});

		app.post('/api/v1/users/authentication', async (req, res) => {
			const response = await userController.loginUser({
				body: {
					email: req.body.email,
					password: req.body.password
				}
			});
			res.status(response.statusCode);
			res.json(response.errors || response.body);
		});
	}
}
export default new UserRoute();
