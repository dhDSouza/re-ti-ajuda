const { expect, describe, it, beforeAll, afterAll, afterEach } = require('@jest/globals')
const sequelize = require('../config/connection')
const Answer = require('../models/answer')
const Question = require('../models/question')
const User = require('../models/user')

describe('Answer Model', () => {
	beforeAll(async () => {
		await sequelize.sync()
	})

	afterEach(async () => {
		await Answer.destroy({ where: {} })
		await Question.destroy({ where: {} })
		await User.destroy({ where: {} })
	})
		
	afterAll(async () => {
		await sequelize.close()
	})

	it('deve criar uma nova resposta', async () => {
		const user = await User.create({
			username: 'john_doe',
			password: 'password123',
		})

		const question = await Question.create({
			description: 'Qual é a capital da França?',
			userId: user.id,
		})

		const answer = await Answer.create({
			description: 'A capital da França é Paris.',
			userId: user.id,
			questionId: question.id,
		})

		expect(answer.id).toBeDefined()
		expect(answer.description).toBe('A capital da França é Paris.')
		expect(answer.userId).toBe(user.id)
		expect(answer.questionId).toBe(question.id)
	})

	it('deve encontrar uma resposta pelo ID', async () => {
		const user = await User.create({
			username: 'john_doe',
			password: 'password123',
		})

		const question = await Question.create({
			description: 'Qual é a capital da França?',
			userId: user.id,
		})

		const answer = await Answer.create({
			description: 'A capital da França é Paris.',
			userId: user.id,
			questionId: question.id,
		})

		const foundAnswer = await Answer.findOne({ where: { id: answer.id } })

		expect(foundAnswer).toBeDefined()
		expect(foundAnswer.description).toBe('A capital da França é Paris.')
		expect(foundAnswer.userId).toBe(user.id)
		expect(foundAnswer.questionId).toBe(question.id)
	})

	it('deve associar uma resposta a uma pergunta e um usuário', async () => {
		const user = await User.create({
			username: 'john_doe',
			password: 'password123',
		})

		const question = await Question.create({
			description: 'Qual é a capital da França?',
			userId: user.id,
		})

		const answer = await Answer.create({
			description: 'A capital da França é Paris.',
			userId: user.id,
			questionId: question.id,
		})

		const foundAnswer = await Answer.findOne({ where: { userId: answer.userId, questionId: answer.questionId } })

		expect(foundAnswer).toBeDefined()
		expect(foundAnswer.description).toBe('A capital da França é Paris.')
		expect(foundAnswer.userId).toBe(user.id)
		expect(foundAnswer.questionId).toBe(question.id)
	})
})
