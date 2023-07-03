const { expect, describe, it, beforeAll, afterAll, afterEach } = require('@jest/globals')
const sequelize = require('../config/connection')
const Question = require('../models/question')
const User = require('../models/user')

describe('Question Model', () => {
	beforeAll(async () => {
		await sequelize.sync()
	})

	afterEach(async () => {
		await Question.destroy({ where: {} })
		await User.destroy({ where: {} })
	})
		
	afterAll(async () => {
		await sequelize.close()
	})

	it('deve criar uma nova pergunta', async () => {
		const user = await User.create({
			username: 'john_doe',
			password: 'password123',
		})

		const question = await Question.create({
			description: 'Qual é a capital da França?',
			userId: user.id,
		})

		expect(question.id).toBeDefined()
		expect(question.description).toBe('Qual é a capital da França?')
		expect(question.userId).toBe(user.id)
	})

	it('deve encontrar uma pergunta pelo ID', async () => {
		const user = await User.create({
			username: 'john_doe',
			password: 'password123',
		})

		const question = await Question.create({
			description: 'Qual é a capital da França?',
			userId: user.id,
		})

		const foundQuestion = await Question.findOne({ where: { id: question.id } })

		expect(foundQuestion).toBeDefined()
		expect(foundQuestion.description).toBe('Qual é a capital da França?')
		expect(foundQuestion.userId).toBe(user.id)
	})

	it('deve associar uma pergunta a um usuário', async () => {
		const user = await User.create({
			username: 'john_doe',
			password: 'password123',
		})

		const question = await Question.create({
			description: 'Qual é a capital da França?',
			userId: user.id,
		})

		const foundQuestion = await Question.findOne({ where: { userId: question.userId } })

		expect(foundQuestion).toBeDefined()
		expect(foundQuestion.description).toBe('Qual é a capital da França?')
		expect(foundQuestion.userId).toBe(user.id)

	})
})
