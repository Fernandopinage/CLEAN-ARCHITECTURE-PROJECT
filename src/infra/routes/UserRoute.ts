import express from 'express';
import UserController from '@/infra/controller/UserController';
class UserRoute {
	route(app: express.Application) {
		const userController = new UserController();
		app.post('/api/v1/users', async (req, res) => {
			const response = await userController.create({
				body: {
					name: req.body.name,
					cpf: req.body.cpf,
					rg: req.body.rg,
					year: req.body.year
				}
			});
			res.status(response.statusCode);
			res.json(response.errors || response.body);
		});
	}
}
export default new UserRoute();
