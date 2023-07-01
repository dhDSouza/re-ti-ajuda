const { User, Question, Answer } = require('../models')

async function userAlreadyExist(req, res, next) {
	const { username } = req.body
	const user = await User.findOne({ where: { username } })
	if (user) {
		return res.status(400).json({ message: 'User already exist' })
	}
	next()
}

async function userNotFound(req, res, next) {
	const { id } = req.params
	const user = await User.findByPk(id)
	if (!user) {
		return res.status(404).json({ message: 'User not found' })
	}
	next()
}

async function questionNotFound(req, res, next) {
	const { id } = req.params
	const question = await Question.findByPk(id)
	if (!question) {
		return res.status(404).json({ message: 'Question not found' })
	}
	next()
}

async function answerNotFound(req, res, next) {
	const { id } = req.params
	const answer = await Answer.findByPk(id)
	if (!answer) {
		return res.status(404).json({ message: 'Answer not found' })
	}
	next()
}

module.exports = {
	userAlreadyExist,
	userNotFound,
	questionNotFound,
	answerNotFound
}