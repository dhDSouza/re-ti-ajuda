const QuestionRepository = require('../repositories/question-repository')

async function createQuestion(userId, description) {
	return QuestionRepository.createQuestion(userId, description)
}

async function findAllQuestions() {
	return QuestionRepository.findAllQuestions()
}

async function findQuestionsByUserId(userId) {
	return QuestionRepository.findQuestionsByUserId(userId)
}

async function updateQuestion(id, description) {
	return QuestionRepository.updateQuestion(id, description)
}

async function deleteQuestion(id) {
	return QuestionRepository.deleteQuestion(id)
}

module.exports = {
	createQuestion,
	findAllQuestions,
	findQuestionsByUserId,
	updateQuestion,
	deleteQuestion
}
