'use strict';

/** @type {import('sequelize-cli').Migration} */
// eslint-disable-next-line no-undef
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('users', {
			id: {
				type: Sequelize.BIGINT,
				autoIncrement: true,
				primaryKey: true
			},
			first_name: {
				type: Sequelize.STRING,
				allowNull: false
			},
			second_name: {
				type: Sequelize.STRING,
				allowNull: false
			},
			email: {
				type: Sequelize.STRING,
				allowNull: false
			},
			password: {
				type: Sequelize.STRING,
				allowNull: false
			},
			phone: {
				type: Sequelize.STRING,
				allowNull: true
			},
			pcd: {
				type: Sequelize.BOOLEAN,
				allowNull: false
			},
			rg: {
				type: Sequelize.STRING,
				allowNull: false
			},
			cpf: {
				type: Sequelize.STRING,
				allowNull: false
			},
			year: {
				type: Sequelize.STRING,
				allowNull: false
			},
			birth_place: {
				type: Sequelize.STRING,
				allowNull: false
			},
			color_race: {
				type: Sequelize.STRING,
				allowNull: false
			},
			Weight: {
				type: Sequelize.STRING,
				allowNull: false
			},
			height: {
				type: Sequelize.STRING,
				allowNull: false
			},
			marital_status: {
				type: Sequelize.STRING,
				allowNull: false
			},
			children: {
				type: Sequelize.STRING,
				allowNull: false
			},
			gender: {
				type: Sequelize.STRING,
				allowNull: false
			},
			salary_expectation: {
				type: Sequelize.STRING,
				allowNull: false
			},
			military_experience: {
				type: Sequelize.STRING,
				allowNull: false
			}
		});
	},

	async down(queryInterface) {
		await queryInterface.dropTable('users');
	}
};
