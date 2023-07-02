const UserService = require('../services/user-service')

async function registerUser(req, res) {
	const { username, password } = req.body

	try {
		await UserService.registerUser(username, password)
		res.status(201).json({ message: 'Usuário registrado com sucesso' })
	} catch (error) {
		res.status(500).json({ message: 'Erro ao registrar usuário', error: error.message })
	}
}

async function loginUser(req, res) {
	const { username, password } = req.body

	try {
		const user = await UserService.loginUser(username, password)
		req.session.userId = user.id
		res.json({ message: 'Usuário autenticado com sucesso' })
	} catch (error) {
		res.status(401).json({ message: 'Falha na autenticação', error: error.message })
	}
}

async function logoutUser(req, res) {
	req.session.destroy()
	res.json({ message: 'Usuário deslogado com sucesso' })
}

async function updateUser(req, res) {
	const { username, password } = req.body
	const { userId } = req.session

	try {
		await UserService.updateUser(userId, username, password)
		res.json({ message: 'Usuário atualizado com sucesso' })
	} catch (error) {
		res.status(500).json({ message: 'Erro ao atualizar usuário', error: error.message })
	}
}

async function deleteUser(req, res) {
	const { userId } = req.session

	try {
		await UserService.deleteUser(userId)
		res.json({ message: 'Usuário deletado com sucesso' })
	} catch (error) {
		res.status(500).json({ message: 'Erro ao deletar usuário', error: error.message })
	}
}

module.exports = {
	registerUser,
	loginUser,
	logoutUser,
	updateUser,
	deleteUser
}
