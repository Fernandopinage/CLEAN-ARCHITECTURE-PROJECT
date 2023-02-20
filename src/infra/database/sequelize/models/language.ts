import { sequelize } from '@/infra/database/sequelize/config/database';
import { DataTypes, Model } from 'sequelize';
export class Language extends Model {}

Language.init(
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
		language: {
			type: DataTypes.STRING,
			allowNull: false
		},
		level_writing: {
			type: DataTypes.STRING,
			allowNull: false
		},
		level_reading: {
			type: DataTypes.STRING,
			allowNull: false
		},
		level_conversation: {
			type: DataTypes.STRING,
			allowNull: false
		}
	},
	{
		sequelize,
		modelName: 'language',
		tableName: 'languages'
	}
);
