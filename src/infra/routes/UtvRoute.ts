import express from 'express';
import UtvController from '../controller/UtvController';
class UtvRoute {
	route(app: express.Application) {
		app.post('/api/v1/utvs', async (req, res) => {
			const utvController = new UtvController();
			const response = await utvController.create({
				body: {
					id_user: req.body.id_user,
					name: req.body.name,
					workload: req.body.workload,
					data_certificate: req.body.data_certificate,
					occupation_area: req.body.occupation_area
				}
			});

			res.status(response.statusCode);
			res.json(response.body || response.errors);
		});
	}
}

export default new UtvRoute();
