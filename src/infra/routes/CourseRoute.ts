import express from 'express';
import CourseController from '../controller/CourseController';
class CourseRoute {
	route(app: express.Application) {
		app.post('/api/v1/courses', async (req, res) => {
			const courseController = new CourseController();
			const response = await courseController.create({
				body: {
					id_user: req.body.id_user,
					extracurricular_courses: req.body.extracurricular_courses,
					workload: req.body.workload,
					data_certificate: req.body.data_certificate,
					occupation_area: req.body.occupation_area,
					educational_institution: req.body.educational_institution,
					certified_url: req.body.certified_url
				}
			});

			res.status(response.statusCode);
			res.json(response.errors || response.body);
		});
	}
}

export default new CourseRoute();
