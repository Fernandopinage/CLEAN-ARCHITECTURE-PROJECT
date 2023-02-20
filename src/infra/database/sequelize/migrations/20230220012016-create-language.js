'use strict';

/** @type {import('sequelize-cli').Migration} */
// eslint-disable-next-line no-undef
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('languages', {
			id: {
				type: Sequelize.BIGINT,
				autoIncrement: true,
				primaryKey: true
			},
			id_user: {
				type: Sequelize.BIGINT,
				allowNull: false
			},
			language: {
				type: Sequelize.STRING,
				allowNull: false
			},
			level_writing: {
				type: Sequelize.STRING,
				allowNull: false
			},
			level_reading: {
				type: Sequelize.STRING,
				allowNull: false
			},
			level_conversation: {
				type: Sequelize.STRING,
				allowNull: false
			}
		});
	},

	async down(queryInterface) {
		await queryInterface.dropTable('languages');
	}
};
