import { sequelize } from '@/infra/database/sequelize/config/database';
import { DataTypes, Model } from 'sequelize';
export class Utv extends Model {}

Utv.init(
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
		name: {
			type: DataTypes.STRING,
			allowNull: false
		},
		workload: {
			type: DataTypes.STRING,
			allowNull: false
		},
		data_certificate: {
			type: DataTypes.STRING,
			allowNull: false
		},
		occupation_area: {
			type: DataTypes.STRING,
			allowNull: false
		}
	},
	{
		sequelize,
		modelName: 'utv',
		tableName: 'utvs'
	}
);
