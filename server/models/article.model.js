const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Article extends Model {}

Article.init({
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
	text: {
		type: DataTypes.TEXT,
		allowNull: false,
	},
	date: {
		type: DataTypes.DATE,
		defaultValue: DataTypes.NOW,
	},
	points: {
		type: DataTypes.INTEGER,
		defaultValue: 0,
	},
	public: {
		type: DataTypes.BOOLEAN,
		defaultValue: true,
	},
}, {
	sequelize,
	modelName: 'Article',
	timestamps: false,
});

module.exports = Article;