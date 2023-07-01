const QuestionService = require('../services/question-service')

async function createQuestion(req, res) {
	const { userId } = req.session
	const { description } = req.body

	try {
		await QuestionService.createQuestion(userId, description)
		res.status(201).json({ message: 'Pergunta criada com sucesso' })
	} catch (error) {
		res.status(500).json({ message: 'Erro ao criar pergunta', error: error.message })
	}
}

async function findAllQuestions(req, res) {
	try {
		const questions = await QuestionService.findAllQuestions()
		res.status(200).json(questions)
	} catch (error) {
		res.status(500).json({ message: 'Erro ao buscar perguntas', error: error.message })
	}
}

async function findQuestionsByUserId(req, res) {
	const { userId } = req.session

	try {
		const questions = await QuestionService.findQuestionsByUserId(userId)
		res.status(200).json(questions)
	} catch (error) {
		res.status(500).json({ message: 'Erro ao buscar perguntas', error: error.message })
	}
}

async function updateQuestion(req, res) {
	const { id } = req.params
	const { description } = req.body

	try {
		await QuestionService.updateQuestion(id, description)
		res.status(200).json({ message: 'Pergunta atualizada com sucesso' })
	} catch (error) {
		res.status(500).json({ message: 'Erro ao atualizar pergunta', error: error.message })
	}
}

async function deleteQuestion(req, res) {
	const { id } = req.params

	try {
		await QuestionService.deleteQuestion(id)
		res.status(200).json({ message: 'Pergunta deletada com sucesso' })
	} catch (error) {
		res.status(500).json({ message: 'Erro ao deletar pergunta', error: error.message })
	}
}

module.exports = {
	createQuestion,
	findAllQuestions,
	findQuestionsByUserId,
	updateQuestion,
	deleteQuestion
}
