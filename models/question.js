const { DataTypes } = require('sequelize')
const sequelize = require('../config/connection')

const Question = sequelize.define('Question', {
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true,
	},
	description: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	UserId: {
		type: DataTypes.INTEGER,
		references: {
			model: 'User',
			key: 'id'
		},
		allowNull: false
	}
})

module.exports = Question
