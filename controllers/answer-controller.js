const AnswerService = require('../services/answer-service')

async function createAnswer(req, res) {
	const { questionId } = req.params
	const { userId } = req.session
	const { description } = req.body

	try {
		await AnswerService.createAnswer(userId, questionId, description)
		res.status(201).json({ message: 'Resposta criada com sucesso' })
	} catch (error) {
		res.status(500).json({ message: 'Erro ao criar resposta', error: error.message })
	}
}

async function findAnswerByQuestionId(req, res) {
	const { questionId } = req.params

	try {
		const answer = await AnswerService.findAnswerByQuestionId(questionId)
		res.status(200).json(answer)
	} catch (error) {
		res.status(500).json({ message: 'Erro ao buscar resposta', error: error.message })
	}
}

async function updateAnswer(req, res) {
	const { id } = req.params
	const { description } = req.body

	try {
		await AnswerService.updateAnswer(id, description)
		res.status(200).json({ message: 'Resposta atualizada com sucesso' })
	} catch (error) {
		res.status(500).json({ message: 'Erro ao atualizar resposta', error: error.message })
	}
}

async function deleteAnswer(req, res) {
	const { id } = req.params

	try {
		await AnswerService.deleteAnswer(id)
		res.status(200).json({ message: 'Resposta deletada com sucesso' })
	} catch (error) {
		res.status(500).json({ message: 'Erro ao deletar resposta', error: error.message })
	}
}

module.exports = {
	createAnswer,
	findAnswerByQuestionId,
	updateAnswer,
	deleteAnswer
}
