const Question = require('../models/question')
const Answer = require('../models/answer')

async function createQuestion(userId, description) {
	return Question.create({ userId, description })
}

async function findQuestionsByUserId(userId) {
	return Question.findAll({ where: { userId } })
}

async function findAllQuestions() {
	return Question.findAll()
}

async function updateQuestion(id, description) {
	return Question.update(description, { where: { id } })
}

async function deleteQuestion(id) {
	await Answer.destroy({ where: { questionId: id } })
	return Question.destroy({ where: { id } })
}

module.exports = {
	createQuestion,
	findQuestionsByUserId,
	findAllQuestions,
	updateQuestion,
	deleteQuestion
}
