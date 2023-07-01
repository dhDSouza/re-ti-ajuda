require('dotenv').config()
const { Sequelize } = require('sequelize')
const { DB_HOST, DB_USER, DB_PASS, DB_NAME, DB_DIALECT, DB_PORT } = process.env

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
	host: DB_HOST,
	port: DB_PORT,
	dialect: DB_DIALECT,
})

module.exports = sequelize
