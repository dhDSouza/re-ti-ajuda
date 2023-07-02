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
	userId: {
		type: DataTypes.INTEGER,
		allowNull: false
	},
	questionId: {
		type: DataTypes.INTEGER,
		allowNull: false
	}		
})

Answer.belongsTo(Question, { foreignKey: 'questionId', allowNull: false })
Answer.belongsTo(User, { foreignKey: 'userId', allowNull: false })

module.exports = Answer
