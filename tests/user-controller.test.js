/* eslint-disable no-undef */
const { expect, describe, it, afterEach } = require('@jest/globals')
const UserService = require('../services/user-service')
const UserController = require('../controllers/user-controller')

jest.mock('../services/user-service')

describe('UserController', () => {
	afterEach(() => {
		jest.clearAllMocks()
	})

	it('deve registrar um novo usuário e retornar status 201', async () => {
		const mockRegisterUser = jest.spyOn(UserService, 'registerUser')
		const req = { body: { username: 'john_doe', password: 'password123' } }
		const res = { status: jest.fn().mockReturnThis(), json: jest.fn() }

		await UserController.registerUser(req, res)

		expect(mockRegisterUser).toHaveBeenCalledWith('john_doe', 'password123')
		expect(res.status).toHaveBeenCalledWith(201)
		expect(res.json).toHaveBeenCalledWith({ message: 'Usuário registrado com sucesso' })
	})

	it('deve autenticar um usuário e retornar status 200', async () => {
		const mockLoginUser = jest.spyOn(UserService, 'loginUser')
		const req = { body: { username: 'john_doe', password: 'password123' }, session: { userId: 1 } }
		const res = { status: jest.fn().mockReturnThis(), json: jest.fn() }

		mockLoginUser.mockResolvedValue({ id: 1 })

		await UserController.loginUser(req, res)

		expect(mockLoginUser).toHaveBeenCalledWith('john_doe', 'password123')
		expect(req.session.userId).toBe(1)
		expect(res.json).toHaveBeenCalledWith({ message: 'Usuário autenticado com sucesso' })
	})

	it('deve sair de um usuário e retornar status 200', async () => {
		const req = { session: { destroy: jest.fn() } }
		const res = { json: jest.fn() }

		await UserController.logoutUser(req, res)

		expect(req.session.destroy).toHaveBeenCalled()
		expect(res.json).toHaveBeenCalledWith({ message: 'Usuário deslogado com sucesso' })
	})

	it('deve atualizar um usuário e retornar status 200', async () => {
		const mockUpdateUser = jest.spyOn(UserService, 'updateUser')
		const req = { body: { username: 'new_username', password: 'new_password' }, session: { userId: 1 } }
		const res = { json: jest.fn() }

		await UserController.updateUser(req, res)

		expect(mockUpdateUser).toHaveBeenCalledWith(1, 'new_username', 'new_password')
		expect(res.json).toHaveBeenCalledWith({ message: 'Usuário atualizado com sucesso' })
	})

	it('deve excluir um usuário e retornar status 200', async () => {
		const mockDeleteUser = jest.spyOn(UserService, 'deleteUser')
		const req = { session: { userId: 1 } }
		const res = { json: jest.fn() }

		await UserController.deleteUser(req, res)

		expect(mockDeleteUser).toHaveBeenCalledWith(1)
		expect(res.json).toHaveBeenCalledWith({ message: 'Usuário deletado com sucesso' })
	})
})
