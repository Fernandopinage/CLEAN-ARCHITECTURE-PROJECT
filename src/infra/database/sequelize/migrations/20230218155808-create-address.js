'use strict';

/** @type {import('sequelize-cli').Migration} */
// eslint-disable-next-line no-undef
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('addresses', {
			id: {
				type: Sequelize.BIGINT,
				autoIncrement: true,
				primaryKey: true
			},
			id_user: {
				type: Sequelize.BIGINT,
				allowNull: false
			},
			cep: {
				type: Sequelize.STRING,
				allowNull: false
			},
			uf: {
				type: Sequelize.STRING,
				allowNull: false
			},
			city: {
				type: Sequelize.STRING,
				allowNull: false
			},
			neighborhood: {
				type: Sequelize.STRING,
				allowNull: false
			},
			number: {
				type: Sequelize.STRING,
				allowNull: false
			},
			public_place: {
				type: Sequelize.STRING,
				allowNull: true
			},
			complement: {
				type: Sequelize.STRING,
				allowNull: true
			}
		});
	},

	async down(queryInterface) {
		await queryInterface.dropTable('addresses');
	}
};
