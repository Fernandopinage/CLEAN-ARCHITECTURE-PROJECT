import express from 'express';
import ExperienceController from '../controller/ExperienceController';
class Experience {
	route(app: express.Application) {
		app.post('/api/v1/experiences', async (req, res) => {
			const experienceController = new ExperienceController();
			const response = await experienceController.create({
				body: {
					id_user: req.body.id_user,
					first_job: req.body.first_job,
					company_name: req.body.company_name,
					office: req.body.office,
					company_current: req.body.company_current,
					data_start: req.body.data_start,
					date_final: req.body.date_final,
					wage: req.body.wage,
					developed_activity: req.body.developed_activity
				}
			});

			res.status(response.statusCode);
			res.json(response.body || response.errors);
		});
	}
}

export default new Experience();
