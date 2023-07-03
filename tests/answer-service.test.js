/* eslint-disable no-undef */
const { expect, describe, it, beforeEach } = require('@jest/globals')
const AnswerRepository = require('../repositories/answer-repository')
const AnswerService = require('../services/answer-service')

jest.mock('../repositories/answer-repository')

describe('AnswerService', () => {
	beforeEach(() => {
		jest.clearAllMocks()
	})

	it('deve criar uma nova resposta', async () => {
		const mockCreateAnswer = jest.spyOn(AnswerRepository, 'createAnswer')

		const userId = 1
		const questionId = 1
		const description = 'A capital da França é Paris.'

		await AnswerService.createAnswer(userId, questionId, description)

		expect(mockCreateAnswer).toHaveBeenCalledWith(userId, questionId, description)
	})

	it('deve buscar respostas por ID da pergunta', async () => {
		const mockFindAnswerByQuestionId = jest.spyOn(AnswerRepository, 'findAnswerByQuestionId')

		const questionId = 1

		await AnswerService.findAnswerByQuestionId(questionId)

		expect(mockFindAnswerByQuestionId).toHaveBeenCalledWith(questionId)
	})

	it('deve atualizar uma resposta', async () => {
		const mockUpdateAnswer = jest.spyOn(AnswerRepository, 'updateAnswer')

		const id = 1
		const description = 'Nova descrição da resposta'

		await AnswerService.updateAnswer(id, description)

		expect(mockUpdateAnswer).toHaveBeenCalledWith(id, description)
	})

	it('deve deletar uma resposta', async () => {
		const mockDeleteAnswer = jest.spyOn(AnswerRepository, 'deleteAnswer')

		const id = 1

		await AnswerService.deleteAnswer(id)

		expect(mockDeleteAnswer).toHaveBeenCalledWith(id)
	})
})
