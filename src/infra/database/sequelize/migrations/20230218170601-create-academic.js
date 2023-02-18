'use strict';

/** @type {import('sequelize-cli').Migration} */
// eslint-disable-next-line no-undef
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('academics', {
			id: {
				type: Sequelize.BIGINT,
				autoIncrement: true,
				primaryKey: true
			},
			id_user: {
				type: Sequelize.BIGINT,
				allowNull: false
			},
			training: {
				type: Sequelize.STRING,
				allowNull: false
			},
			institution: {
				type: Sequelize.STRING,
				allowNull: false
			},
			name: {
				type: Sequelize.STRING,
				allowNull: false
			},
			completion_year: {
				type: Sequelize.STRING,
				allowNull: false
			},
			start_year: {
				type: Sequelize.STRING,
				allowNull: false
			},
			period: {
				type: Sequelize.STRING,
				allowNull: false
			}
		});
	},

	async down(queryInterface) {
		await queryInterface.dropTable('academics');
	}
};
