import express from 'express';
import LanguagemController from '../controller/LanguagemController';
class LanguagemRoute {
	route(app: express.Application) {
		app.post('/api/v1/languagem', async (req, res) => {
			const languagemController = new LanguagemController();
			const response = await languagemController.create({
				body: {
					id_user: req.body.id_user,
					language: req.body.language,
					level_writing: req.body.level_writing,
					level_reading: req.body.level_reading,
					level_conversation: req.body.level_conversation
				}
			});

			res.status(response.statusCode);
			res.json(response.errors || response.body);
		});
	}
}
export default new LanguagemRoute();
