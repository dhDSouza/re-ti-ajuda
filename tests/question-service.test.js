/* eslint-disable no-undef */
const { expect, describe, it, afterEach } = require('@jest/globals')
const QuestionRepository = require('../repositories/question-repository')
const QuestionService = require('../services/question-service')

jest.mock('../repositories/question-repository')

describe('QuestionService', () => {
	afterEach(() => {
		jest.clearAllMocks()
	})

	it('deve criar uma nova pergunta', async () => {
		const mockCreateQuestion = jest.spyOn(QuestionRepository, 'createQuestion')
		const userId = 1
		const description = 'Qual é a capital do Brasil?'

		await QuestionService.createQuestion(userId, description)

		expect(mockCreateQuestion).toHaveBeenCalledWith(userId, description)
	})

	it('deve encontrar todas as perguntas', async () => {
		const mockFindAllQuestions = jest.spyOn(QuestionRepository, 'findAllQuestions')

		await QuestionService.findAllQuestions()

		expect(mockFindAllQuestions).toHaveBeenCalled()
	})

	it('deve encontrar perguntas por ID do usuário', async () => {
		const mockFindQuestionsByUserId = jest.spyOn(QuestionRepository, 'findQuestionsByUserId')
		const userId = 1

		await QuestionService.findQuestionsByUserId(userId)

		expect(mockFindQuestionsByUserId).toHaveBeenCalledWith(userId)
	})

	it('deve atualizar uma pergunta', async () => {
		const mockUpdateQuestion = jest.spyOn(QuestionRepository, 'updateQuestion')
		const id = 1
		const description = 'Qual é a capital da França?'

		await QuestionService.updateQuestion(id, description)

		expect(mockUpdateQuestion).toHaveBeenCalledWith(id, description)
	})

	it('deve excluir uma pergunta', async () => {
		const mockDeleteQuestion = jest.spyOn(QuestionRepository, 'deleteQuestion')
		const id = 1

		await QuestionService.deleteQuestion(id)

		expect(mockDeleteQuestion).toHaveBeenCalledWith(id)
	})
})