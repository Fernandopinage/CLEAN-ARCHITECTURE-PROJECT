import { sequelize } from '@/infra/database/sequelize/config/database';
import { DataTypes, Model } from 'sequelize';
export class Interest extends Model {}

Interest.init(
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
		professional_interest: {
			type: DataTypes.STRING,
			allowNull: false
		}
	},
	{
		sequelize,
		modelName: 'interest',
		tableName: 'interests'
	}
);
