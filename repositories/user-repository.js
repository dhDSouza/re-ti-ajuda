const User = require('../models/User')

async function createUser(username, password) {
	return User.create({ username, password })
}

async function findUserByUsername(username) {
	return User.findOne({ where: { username } })
}

async function updateUser(id, newData) {
	const user = await User.findByPk(id)
	if (!user) {
		throw new Error('Usuário não encontrado')
	}
    
	await user.update(newData)
    
	return user
}
  
async function deleteUser(id) {
	const user = await User.findByPk(id)
	if (!user) {
		throw new Error('Usuário não encontrado')
	}
    
	await user.destroy()
}

module.exports = {
	createUser,
	findUserByUsername,
	updateUser,
	deleteUser
}
