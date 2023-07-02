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
	return Question.findByIdAndUpdate(id, { description })
}

async function deleteQuestion(id) {
	await Answer.deleteMany({ where: { questionId: id } })
	return Question.findByIdAndDelete(id)
}

module.exports = {
	createQuestion,
	findQuestionsByUserId,
	findAllQuestions,
	updateQuestion,
	deleteQuestion
}
