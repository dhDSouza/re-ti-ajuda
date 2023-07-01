const { DataTypes } = require('sequelize')
const sequelize = require('../config/connection')
const User = require('./user')

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
})

Question.belongsTo(User, { foreignKey: 'UserId' })

module.exports = Question
