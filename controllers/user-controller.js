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
		req.session.user = user
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

	try {
		await UserService.updateUser(username, password)
		res.json({ message: 'Usuário atualizado com sucesso' })
	} catch (error) {
		res.status(500).json({ message: 'Erro ao atualizar usuário', error: error.message })
	}
}

async function deleteUser(req, res) {
	const { username, password } = req.body

	try {
		await UserService.deleteUser(username, password)
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
