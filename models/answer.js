const { DataTypes } = require('sequelize')
const sequelize = require('../config/connection')
const Question = require('./question')
const User = require('./user')

const Answer = sequelize.define('Answer', {
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

Answer.belongsTo(Question, { foreignKey: 'QuestionId' })
Answer.belongsTo(User, { foreignKey: 'UserId' })

module.exports = Answer
