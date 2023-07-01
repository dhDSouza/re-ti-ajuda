const QuestionRepository = require('../repositories/question-repository')

async function createQuestion(description, userId) {
	return QuestionRepository.createQuestion(description, userId)
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
