const User = require('../models/user')
const Question = require('../models/question')
const Answer = require('../models/answer')

async function userAlreadyExist(req, res, next) {
	const { username } = req.body
	const user = await User.findOne({ where: { username } })
	if (user) {
		return res.status(409).json({ message: 'O usuário já existe' })
	}
	next()
}

async function userNotFound(req, res, next) {
	const { id } = req.params
	const user = await User.findByPk(id)
	if (!user) {
		return res.status(404).json({ message: 'Usuário não encontrado' })
	}
	next()
}

async function questionNotFound(req, res, next) {
	const { id } = req.params
	const question = await Question.findByPk(id)
	if (!question) {
		return res.status(404).json({ message: 'Pergunta não encontrada' })
	}
	next()
}

async function answerNotFound(req, res, next) {
	const { id } = req.params
	const answer = await Answer.findByPk(id)
	if (!answer) {
		return res.status(404).json({ message: 'Resposta não encontrada' })
	}
	next()
}

module.exports = {
	userAlreadyExist,
	userNotFound,
	questionNotFound,
	answerNotFound
}