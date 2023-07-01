const Answer = require('../models/answer')

async function createAnswer(description, questionId, userId) {
	return Answer.create({ description, questionId, userId })

}

async function findAnswerByQuestionId(questionId) {
	return Answer.find({ questionId })
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
