/* eslint-disable no-undef */
const { expect, describe, it, afterEach } = require('@jest/globals')
const AnswerService = require('../services/answer-service')
const AnswerController = require('../controllers/answer-controller')

jest.mock('../services/answer-service')

describe('AnswerController', () => {
	afterEach(() => {
		jest.clearAllMocks()
	})

	it('deve criar uma nova resposta e retornar status 201', async () => {
		const mockCreateAnswer = jest.spyOn(AnswerService, 'createAnswer')
		const req = { params: { questionId: 1 }, session: { userId: 1 }, body: { description: 'Minha resposta' } }
		const res = { status: jest.fn().mockReturnThis(), json: jest.fn() }

		await AnswerController.createAnswer(req, res)

		expect(mockCreateAnswer).toHaveBeenCalledWith(1, 1, 'Minha resposta')
		expect(res.status).toHaveBeenCalledWith(201)
		expect(res.json).toHaveBeenCalledWith({ message: 'Resposta criada com sucesso' })
	})

	it('deve buscar uma resposta pelo ID da pergunta e retornar status 200', async () => {
		const mockFindAnswerByQuestionId = jest.spyOn(AnswerService, 'findAnswerByQuestionId')
		const req = { params: { questionId: 1 } }
		const res = { status: jest.fn().mockReturnThis(), json: jest.fn() }
		const answer = { id: 1, description: 'Minha resposta' }

		mockFindAnswerByQuestionId.mockResolvedValue(answer)

		await AnswerController.findAnswerByQuestionId(req, res)

		expect(mockFindAnswerByQuestionId).toHaveBeenCalledWith(1)
		expect(res.status).toHaveBeenCalledWith(200)
		expect(res.json).toHaveBeenCalledWith(answer)
	})

	it('deve atualizar uma resposta e retornar status 200', async () => {
		const mockUpdateAnswer = jest.spyOn(AnswerService, 'updateAnswer')
		const req = { params: { id: 1 }, body: { description: 'Minha resposta atualizada' } }
		const res = { status: jest.fn().mockReturnThis(), json: jest.fn() }

		await AnswerController.updateAnswer(req, res)

		expect(mockUpdateAnswer).toHaveBeenCalledWith(1, 'Minha resposta atualizada')
		expect(res.status).toHaveBeenCalledWith(200)
		expect(res.json).toHaveBeenCalledWith({ message: 'Resposta atualizada com sucesso' })
	})

	it('deve excluir uma resposta e retornar status 200', async () => {
		const mockDeleteAnswer = jest.spyOn(AnswerService, 'deleteAnswer')
		const req = { params: { id: 1 } }
		const res = { status: jest.fn().mockReturnThis(), json: jest.fn() }

		await AnswerController.deleteAnswer(req, res)

		expect(mockDeleteAnswer).toHaveBeenCalledWith(1)
		expect(res.status).toHaveBeenCalledWith(200)
		expect(res.json).toHaveBeenCalledWith({ message: 'Resposta deletada com sucesso' })
	})
})
