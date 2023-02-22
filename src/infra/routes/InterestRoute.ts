import express from 'express';
import InterestController from '../controller/InterestController';
class InterestRoute {
	route(app: express.Application) {
		app.post('/api/v1/interestes', async (req, res) => {
			const interestController = new InterestController();
			const response = await interestController.create({
				body: {
					id_user: req.body.id_user,
					professional_interest: req.body.professional_interest
				}
			});
			res.status(response.statusCode);
			res.json(response.errors || response.body);
		});
	}
}

export default new InterestRoute();
