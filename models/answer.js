const { DataTypes } = require('sequelize')
const sequelize = require('../config/connection')

const Answer = sequelize.define('Question', {
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true,
	},
	description: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	QuestionId: {
		type: DataTypes.INTEGER,
		references: {
			model: 'Question',
			key: 'id'
		},
		allowNull: false
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

module.exports = Answer
