/* eslint-disable no-undef */
const { expect, describe, it, afterEach } = require('@jest/globals')
const QuestionService = require('../services/question-service')
const QuestionController = require('../controllers/question-controller')

jest.mock('../services/question-service')

describe('QuestionController', () => {
	afterEach(() => {
		jest.clearAllMocks()
	})

	it('deve criar uma pergunta e retornar status 201', async () => {
		const mockCreateQuestion = jest.spyOn(QuestionService, 'createQuestion')
		const req = {
			session: { userId: 1 },
			body: { description: 'Qual é a capital do Brasil?' }
		}
		const res = {
			status: jest.fn().mockReturnThis(),
			json: jest.fn()
		}

		await QuestionController.createQuestion(req, res)

		expect(mockCreateQuestion).toHaveBeenCalledWith(1, 'Qual é a capital do Brasil?')
		expect(res.status).toHaveBeenCalledWith(201)
		expect(res.json).toHaveBeenCalledWith({ message: 'Pergunta criada com sucesso' })
	})

	it('deve buscar todas as perguntas e retornar status 200', async () => {
		const mockFindAllQuestions = jest.spyOn(QuestionService, 'findAllQuestions')
		mockFindAllQuestions.mockResolvedValue([{ id: 1, description: 'Pergunta 1' }])
		const req = {}
		const res = {
			status: jest.fn().mockReturnThis(),
			json: jest.fn()
		}

		await QuestionController.findAllQuestions(req, res)

		expect(mockFindAllQuestions).toHaveBeenCalled()
		expect(res.status).toHaveBeenCalledWith(200)
		expect(res.json).toHaveBeenCalledWith([{ id: 1, description: 'Pergunta 1' }])
	})

	it('deve buscar perguntas por ID do usuário e retornar status 200', async () => {
		const mockFindQuestionsByUserId = jest.spyOn(QuestionService, 'findQuestionsByUserId')
		mockFindQuestionsByUserId.mockResolvedValue([{ id: 1, description: 'Pergunta 1' }])
		const req = { params: { id: 1 } }
		const res = {
			status: jest.fn().mockReturnThis(),
			json: jest.fn()
		}

		await QuestionController.findQuestionsByUserId(req, res)

		expect(mockFindQuestionsByUserId).toHaveBeenCalledWith(1)
		expect(res.status).toHaveBeenCalledWith(200)
		expect(res.json).toHaveBeenCalledWith([{ id: 1, description: 'Pergunta 1' }])
	})

	it('deve atualizar uma pergunta e retornar status 200', async () => {
		const mockUpdateQuestion = jest.spyOn(QuestionService, 'updateQuestion')
		const req = {
			params: { id: 1 },
			body: { description: 'Qual é a capital da França?' }
		}
		const res = {
			status: jest.fn().mockReturnThis(),
			json: jest.fn()
		}

		await QuestionController.updateQuestion(req, res)

		expect(mockUpdateQuestion).toHaveBeenCalledWith(1, 'Qual é a capital da França?')
		expect(res.status).toHaveBeenCalledWith(200)
		expect(res.json).toHaveBeenCalledWith({ message: 'Pergunta atualizada com sucesso' })
	})

	it('deve excluir uma pergunta e retornar status 200', async () => {
		const mockDeleteQuestion = jest.spyOn(QuestionService, 'deleteQuestion')
		const req = { params: { id: 1 } }
		const res = {
			status: jest.fn().mockReturnThis(),
			json: jest.fn()
		}

		await QuestionController.deleteQuestion(req, res)

		expect(mockDeleteQuestion).toHaveBeenCalledWith(1)
		expect(res.status).toHaveBeenCalledWith(200)
		expect(res.json).toHaveBeenCalledWith({ message: 'Pergunta deletada com sucesso' })
	})
})
