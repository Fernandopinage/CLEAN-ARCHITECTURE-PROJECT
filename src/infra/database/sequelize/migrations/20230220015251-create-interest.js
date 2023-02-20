'use strict';

/** @type {import('sequelize-cli').Migration} */
// eslint-disable-next-line no-undef
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('interests', {
			id: {
				type: Sequelize.BIGINT,
				autoIncrement: true,
				primaryKey: true
			},
			id_user: {
				type: Sequelize.BIGINT,
				allowNull: false
			},
			professional_interest: {
				type: Sequelize.STRING,
				allowNull: false
			}
		});
	},

	async down(queryInterface) {
		await queryInterface.dropTable('interests');
	}
};
