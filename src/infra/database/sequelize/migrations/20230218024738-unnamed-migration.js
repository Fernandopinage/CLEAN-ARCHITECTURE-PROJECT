'use strict';

/** @type {import('sequelize-cli').Migration} */
// eslint-disable-next-line no-undef
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('users', { id: Sequelize.INTEGER });
	},

	async down(queryInterface) {
		await queryInterface.dropTable('users');
	}
};
