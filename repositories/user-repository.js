const User = require('../models/user')
const Question = require('../models/question')
const Answer = require('../models/answer')

async function createUser(username, password) {
	return User.create({ username, password })
}

async function findUserByUsername(username) {
	return User.findOne({ where: { username } })
}

async function updateUser(id, newData) {
	return User.update(newData, { where: { id } })
}
  
async function deleteUser(id) {

	const questions = await Question.findAll({ where: { userId: id } })
	const answers = await Answer.findAll({ where: { userId: id } })
	
	for (const answer of answers) {
		await answer.destroy()
	}

	for (const question of questions) {
		await Answer.deleteMany({ where: { questionId: question.id } })
		await question.destroy()
	}

	return User.destroy({ where: { id } })
}

module.exports = {
	createUser,
	findUserByUsername,
	updateUser,
	deleteUser
}
