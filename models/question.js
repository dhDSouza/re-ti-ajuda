const { DataTypes } = require('sequelize')
const sequelize = require('../config/connection')
const User = require('./user')

const Question = sequelize.define('Question', {
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true
	},
	description: {
		type: DataTypes.STRING,
		allowNull: false
	},
	userId: {
		type: DataTypes.INTEGER,
		allowNull: false
	}	
})

Question.belongsTo(User, { foreignKey: 'userId' })

module.exports = Question
