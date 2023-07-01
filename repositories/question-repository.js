const Question = require('../models/question')

async function create(description, userId) {
	return Question.create({ description, userId })
}

async function findById(id) {
	return Question.findById(id)
}

async function findAll() {
	return Question.find()
}

async function update(id, description) {
	return Question.findByIdAndUpdate(id, { description })
}

async function deleteQuestion(id) {
	return Question.findByIdAndDelete(id)
}

module.exports = {
	create,
	findById,
	findAll,
	update,
	deleteQuestion
}
