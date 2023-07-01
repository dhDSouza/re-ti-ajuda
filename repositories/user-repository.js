const User = require('../models/User')

async function createUser(username, password) {
	return User.create({ username, password })
}

async function findUserByUsername(username) {
	return User.findOne({ where: { username } })
}

async function updateUser(id, newData) {
	return User.update(newData, { where: { id } })
}
  
async function deleteUser(id) {
	return User.destroy({ where: { id } })
}

module.exports = {
	createUser,
	findUserByUsername,
	updateUser,
	deleteUser
}
