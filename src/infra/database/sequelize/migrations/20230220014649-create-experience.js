'use strict';

/** @type {import('sequelize-cli').Migration} */
// eslint-disable-next-line no-undef
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('experiences', {
			id: {
				type: Sequelize.BIGINT,
				autoIncrement: true,
				primaryKey: true
			},
			id_user: {
				type: Sequelize.BIGINT,
				allowNull: false
			},
			first_job: {
				type: Sequelize.BOOLEAN,
				allowNull: false
			},
			company_name: {
				type: Sequelize.STRING,
				allowNull: false
			},
			office: {
				type: Sequelize.STRING,
				allowNull: false
			},
			company_current: {
				type: Sequelize.BOOLEAN,
				allowNull: false
			},
			data_start: {
				type: Sequelize.DATE,
				allowNull: false
			},
			date_final: {
				type: Sequelize.DATE,
				allowNull: false
			},
			wage: {
				type: Sequelize.STRING,
				allowNull: false
			},
			developed_activity: {
				type: Sequelize.TEXT,
				allowNull: false
			}
		});
	},

	async down(queryInterface) {
		await queryInterface.dropTable('experiences');
	}
};
