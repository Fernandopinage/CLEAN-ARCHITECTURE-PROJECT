import { sequelize } from '@/infra/database/sequelize/config/database';
import { DataTypes, Model } from 'sequelize';
export class Course extends Model {}

Course.init(
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
		extracurricular_courses: {
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
		},
		educational_institution: {
			type: DataTypes.STRING,
			allowNull: false
		},
		certified_url: {
			type: DataTypes.STRING,
			allowNull: false
		}
	},
	{
		sequelize,
		modelName: 'course',
		tableName: 'courses'
	}
);
