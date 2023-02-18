import { sequelize } from '@/infra/database/sequelize/config/database';
import { DataTypes, Model } from 'sequelize';
export class Address extends Model {}

Address.init(
	{
		id: {
			type: DataTypes.BIGINT,
			autoIncrement: true,
			primaryKey: true
		},
		id_user: {
			type: DataTypes.BIGINT,
			autoIncrement: true,
			primaryKey: true
		},
		cep: {
			type: DataTypes.STRING,
			allowNull: false
		},
		uf: {
			type: DataTypes.STRING,
			allowNull: false
		},
		city: {
			type: DataTypes.STRING,
			allowNull: false
		},
		neighborhood: {
			type: DataTypes.STRING,
			allowNull: false
		},
		number: {
			type: DataTypes.STRING,
			allowNull: false
		},
		public_place: {
			type: DataTypes.STRING,
			allowNull: true
		},
		complement: {
			type: DataTypes.STRING,
			allowNull: true
		}
	},
	{
		sequelize,
		modelName: 'address',
		tableName: 'addresses'
	}
);
