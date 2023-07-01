const Question = require('../models/question')

async function createQuestion(description, userId) {
	return Question.create({ description, userId })
}

async function findQuestionByUserId(userId) {
	return Question.find({ userId })
}

async function findAllQuestions() {
	return Question.find()
}

async function updateQuestion(id, description) {
	return Question.findByIdAndUpdate(id, { description })
}

async function deleteQuestion(id) {
	return Question.findByIdAndDelete(id)
}

module.exports = {
	createQuestion,
	findQuestionByUserId,
	findAllQuestions,
	updateQuestion,
	deleteQuestion
}
