import { UserDomain } from '@/domain/entities/UserDomain';
import { sequelize } from '@/infra/database/sequelize/config/database';
import { DataTypes, Model } from 'sequelize';
export class User extends Model {
	static mapperArrayToDomain(user: User[]) {
		return user.map((e) => e.mapperToDomain());
	}

	mapperToDomain() {
		return UserDomain.execute({ ...this.dataValues });
	}
}

User.init(
	{
		id: {
			type: DataTypes.BIGINT,
			autoIncrement: true,
			primaryKey: true
		},
		first_name: {
			type: DataTypes.STRING,
			allowNull: false
		},
		second_name: {
			type: DataTypes.STRING,
			allowNull: false
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false
		},
		phone: {
			type: DataTypes.STRING,
			allowNull: true
		},
		pcd: {
			type: DataTypes.BOOLEAN,
			allowNull: false
		},
		rg: {
			type: DataTypes.STRING,
			allowNull: false
		},
		cpf: {
			type: DataTypes.STRING,
			allowNull: false
		},
		year: {
			type: DataTypes.STRING,
			allowNull: false
		},
		birth_place: {
			type: DataTypes.STRING,
			allowNull: false
		},
		color_race: {
			type: DataTypes.STRING,
			allowNull: false
		},
		Weight: {
			type: DataTypes.STRING,
			allowNull: false
		},
		height: {
			type: DataTypes.STRING,
			allowNull: false
		},
		marital_status: {
			type: DataTypes.STRING,
			allowNull: false
		},
		children: {
			type: DataTypes.STRING,
			allowNull: false
		},
		gender: {
			type: DataTypes.STRING,
			allowNull: false
		},
		salary_expectation: {
			type: DataTypes.STRING,
			allowNull: false
		},
		military_experience: {
			type: DataTypes.STRING,
			allowNull: false
		}
	},
	{
		sequelize,
		modelName: 'user',
		tableName: 'users'
	}
);
