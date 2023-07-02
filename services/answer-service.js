const AnswerRepository = require('../repositories/answer-repository')

async function createAnswer(userId, questionId, description) {
	return AnswerRepository.createAnswer(userId, questionId, description)
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
