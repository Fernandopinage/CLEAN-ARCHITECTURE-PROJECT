import { sequelize } from '@/infra/database/sequelize/config/database';
import { DataTypes, Model } from 'sequelize';
export class Experience extends Model {}

Experience.init(
	{
		id: {
			type: DataTypes.BIGINT,
			autoIncrement: true,
			primaryKey: true
		},
		id_user: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		first_job: {
			type: DataTypes.BOOLEAN,
			allowNull: false
		},
		company_name: {
			type: DataTypes.STRING,
			allowNull: false
		},
		office: {
			type: DataTypes.STRING,
			allowNull: false
		},
		company_current: {
			type: DataTypes.BOOLEAN,
			allowNull: false
		},
		data_start: {
			type: DataTypes.DATE,
			allowNull: false
		},
		date_final: {
			type: DataTypes.DATE,
			allowNull: false
		},
		wage: {
			type: DataTypes.STRING,
			allowNull: false
		},
		developed_activity: {
			type: DataTypes.TEXT,
			allowNull: false
		}
	},
	{
		sequelize,
		modelName: 'experience',
		tableName: 'experiences'
	}
);
