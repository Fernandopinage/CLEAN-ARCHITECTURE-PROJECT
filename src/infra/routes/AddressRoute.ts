import express from 'express';
import AddressController from '../controller/AddressController';
class AddressRoute {
	route(app: express.Application) {
		app.post('/api/v1/addresses', async (req, res) => {
			const addressController = new AddressController();
			const response = await addressController.create({
				body: {
					id_user: req.body.id_user,
					cep: req.body.cep,
					uf: req.body.uf,
					city: req.body.city,
					neighborhood: req.body.neighborhood,
					number: req.body.number,
					public_place: req.body.public_place,
					complement: req.body.complement
				}
			});

			res.status(response.statusCode);
			res.json(response.body || response.errors);
		});
	}
}

export default new AddressRoute();
