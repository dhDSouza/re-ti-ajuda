const AnswerRepository = require('../repositories/answer-repository')

async function createAnswer(description, questionId, userId) {
	return AnswerRepository.createAnswer(description, questionId, userId)
}

async function findAnswerByQuestionId(questionId) {
	return AnswerRepository.findAnswerByQuestionId(questionId)
}

async function updateAnswer(id, description) {
	return AnswerRepository.updateAnswer(id, description)
}

async function deleteAnswer(id) {
	return AnswerRepository.deleteAnswer(id)
}

module.exports = {
	createAnswer,
	findAnswerByQuestionId,
	updateAnswer,
	deleteAnswer
}
