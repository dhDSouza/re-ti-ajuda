const bcrypt = require('bcrypt')
const UserRepository = require('../repositories/user-repository')

async function registerUser(username, password) {
	const hashedPassword = await bcrypt.hash(password, 10)
	return UserRepository.createUser(username, hashedPassword)
}

async function loginUser(username, password) {
	const user = await UserRepository.findUserByUsername(username)
	if (!user) {
		throw new Error('Usuário não encontrado')
	}

	const isPasswordValid = await bcrypt.compare(password, user.password)
	if (!isPasswordValid) {
		throw new Error('Senha inválida')
	}

	return user
}

async function updateUser(id, username, password) {
	const hashedPassword = await bcrypt.hash(password, 10)

	const newData = {
		username: username,
		password: hashedPassword
	}
	
	return UserRepository.updateUser(id, newData)
}

async function deleteUser(id) {
	return UserRepository.deleteUser(id)
}

module.exports = {
	registerUser,
	loginUser,
	updateUser,
	deleteUser
}
