import express from 'express';
import AcademicController from '../controller/AcademicController';
class AcademicRoute {
	route(app: express.Application) {
		app.post('/api/v1/academices', async (req, res) => {
			const academicController = new AcademicController();
			const response = await academicController.create({
				body: {
					id_user: req.body.id_user,
					training: req.body.training,
					institution: req.body.institution,
					name: req.body.name,
					completion_year: req.body.completion_year,
					start_year: req.body.start_year,
					period: req.body.period
				}
			});
			res.status(response.statusCode);
			res.json(response.errors || response.body);
		});
	}
}

export default new AcademicRoute();
