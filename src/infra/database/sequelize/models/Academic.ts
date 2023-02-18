import { sequelize } from '@/infra/database/sequelize/config/database';
import { DataTypes, Model } from 'sequelize';
export class Academic extends Model {}

Academic.init(
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
		training: {
			type: DataTypes.STRING,
			allowNull: false
		},
		institution: {
			type: DataTypes.STRING,
			allowNull: false
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false
		},
		completion_year: {
			type: DataTypes.STRING,
			allowNull: false
		},
		start_year: {
			type: DataTypes.STRING,
			allowNull: false
		},
		period: {
			type: DataTypes.STRING,
			allowNull: false
		}
	},
	{
		sequelize,
		modelName: 'academic',
		tableName: 'academics'
	}
);
