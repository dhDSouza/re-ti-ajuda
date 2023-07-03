/* eslint-disable no-undef */
const { expect, describe, it, afterEach } = require('@jest/globals')
const bcrypt = require('bcrypt')
const UserRepository = require('../repositories/user-repository')
const UserService = require('../services/user-service')

jest.mock('../repositories/user-repository')

describe('UserService', () => {
	afterEach(() => {
		jest.clearAllMocks()
	})

	it('deve registrar um novo usuário', async () => {
		const mockCreateUser = jest.spyOn(UserRepository, 'createUser')
		const username = 'john_doe'
		const password = 'password123'

		await UserService.registerUser(username, password)

		expect(mockCreateUser).toHaveBeenCalledWith(username, expect.any(String))
	})

	it('deve entrar um usuário com credenciais válidas', async () => {
		const mockFindUserByUsername = jest.spyOn(UserRepository, 'findUserByUsername')
		const username = 'john_doe'
		const password = 'password123'
		const hashedPassword = await bcrypt.hash(password, 10)

		mockFindUserByUsername.mockResolvedValue({
			id: 1,
			username,
			password: hashedPassword,
		})

		const user = await UserService.loginUser(username, password)

		expect(mockFindUserByUsername).toHaveBeenCalledWith(username)
		expect(user).toBeDefined()
		expect(user.username).toBe(username)
	})

	it('deve lançar um erro ao fazer login com um nome de usuário inválido', async () => {
		const mockFindUserByUsername = jest.spyOn(UserRepository, 'findUserByUsername')
		const username = 'john_doe'
		const password = 'password123'

		mockFindUserByUsername.mockResolvedValue(null)

		await expect(UserService.loginUser(username, password)).rejects.toThrow(
			'Usuário não encontrado'
		)

		expect(mockFindUserByUsername).toHaveBeenCalledWith(username)
	})

	it('deve lançar um erro ao fazer login com uma senha inválida', async () => {
		const mockFindUserByUsername = jest.spyOn(UserRepository, 'findUserByUsername')
		const username = 'john_doe'
		const password = 'password123'
		const hashedPassword = await bcrypt.hash('wrong_password', 10)

		mockFindUserByUsername.mockResolvedValue({
			id: 1,
			username,
			password: hashedPassword,
		})

		await expect(UserService.loginUser(username, password)).rejects.toThrow(
			'Senha inválida'
		)

		expect(mockFindUserByUsername).toHaveBeenCalledWith(username)
	})

	it('deve atualizar um usuário', async () => {
		const mockUpdateUser = jest.spyOn(UserRepository, 'updateUser')
		const userId = 1
		const username = 'new_username'
		const password = 'new_password'

		await UserService.updateUser(userId, username, password)

		expect(mockUpdateUser).toHaveBeenCalledWith(userId, {
			username,
			password: expect.any(String),
		})
	})

	it('deve excluir um usuário', async () => {
		const mockDeleteUser = jest.spyOn(UserRepository, 'deleteUser')
		const userId = 1

		await UserService.deleteUser(userId)

		expect(mockDeleteUser).toHaveBeenCalledWith(userId)
	})
})
