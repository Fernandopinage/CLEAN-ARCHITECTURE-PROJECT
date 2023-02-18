'use strict';

/** @type {import('sequelize-cli').Migration} */
// eslint-disable-next-line no-undef
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('courses', {
			id: {
				type: Sequelize.BIGINT,
				autoIncrement: true,
				primaryKey: true
			},
			id_user: {
				type: Sequelize.BIGINT,
				allowNull: false
			},
			extracurricular_courses: {
				type: Sequelize.STRING,
				allowNull: false
			},
			workload: {
				type: Sequelize.STRING,
				allowNull: false
			},
			data_certificate: {
				type: Sequelize.STRING,
				allowNull: false
			},
			occupation_area: {
				type: Sequelize.STRING,
				allowNull: false
			},
			educational_institution: {
				type: Sequelize.STRING,
				allowNull: false
			},
			certified_url: {
				type: Sequelize.STRING,
				allowNull: false
			}
		});
	},

	async down(queryInterface) {
		await queryInterface.dropTable('courses');
	}
};
