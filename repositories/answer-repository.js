const Answer = require('../models/answer')

async function createAnswer(userId, questionId, description) {
	return Answer.create({ userId, questionId, description })
}

async function findAnswerByQuestionId(questionId) {
	return Answer.findAll({ where: { questionId } })
}

async function updateAnswer(id, description) {
	return Answer.update(description, { where: { id } })
}

async function deleteAnswer(id) {
	return Answer.destroy({ where: { id } })

}

module.exports = {
	createAnswer,
	findAnswerByQuestionId,
	updateAnswer,
	deleteAnswer
}
