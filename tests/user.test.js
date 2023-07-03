const { expect, describe, it, beforeAll, afterEach, afterAll } = require('@jest/globals')
const sequelize = require('../config/connection')
const User = require('../models/user')

describe('User Model', () => {
	beforeAll(async () => {
		await sequelize.sync()
	})

	afterEach(async () => {
		await User.destroy({ where: {} })
	})

	afterAll(async () => {
		await sequelize.close()
	})

	it('deve criar um novo usuário', async () => {
		const user = await User.create({
			username: 'john_doe',
			password: 'password123',
		})

		expect(user.id).toBeDefined()
		expect(user.username).toBe('john_doe')
	})

	it('deve encontrar um usuário pelo nome de usuário', async () => {
		await User.create({
			username: 'john_doe',
			password: 'password123',
		})

		const user = await User.findOne({ where: { username: 'john_doe' } })

		expect(user).toBeDefined()
		expect(user.username).toBe('john_doe')
	})

	it('deve atualizar um usuário', async () => {
		const user = await User.create({
			username: 'john_doe',
			password: 'password123',
		})

		const updatedUser = await User.update(
			{ username: 'new_username' },
			{ where: { id: user.id } }
		)

		expect(updatedUser[0]).toBe(1)
	})

	it('deve excluir um usuário', async () => {
		const user = await User.create({
			username: 'john_doe',
			password: 'password123',
		})

		const deletedUser = await User.destroy({ where: { id: user.id } })
		const foundUser = await User.findOne({ where: { id: user.id } })

		expect(deletedUser).toBe(1)
		expect(foundUser).toBeNull()
	})
})
