const Answer = require('../models/answer')

async function createAnswer(userId, questionId, description) {
	return Answer.create({ userId, questionId, description })
}

async function findAnswerByQuestionId(questionId) {
	return Answer.findAll({ where: { questionId } })
}

async function updateAnswer(id, description) {
	return Answer.findByIdAndUpdate(id, { description })

}

async function deleteAnswer(id) {
	return Answer.findByIdAndDelete(id)

}

module.exports = {
	createAnswer,
	findAnswerByQuestionId,
	updateAnswer,
	deleteAnswer
}
