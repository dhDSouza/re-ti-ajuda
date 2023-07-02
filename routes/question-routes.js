const router = require('express').Router()
const questionController = require('../controllers/question-controller')
const auth = require('../middlewares/auth-middleware')
const { userNotFound, questionNotFound } = require('../middlewares/validation-middleware')

router.get('/', auth, questionController.findAllQuestions)
router.get('/:id', auth, userNotFound, questionController.findQuestionsByUserId)
router.post('/', auth, questionController.createQuestion)
router.put('/:id', auth, questionNotFound, questionController.updateQuestion)
router.delete('/:id', auth, questionNotFound, questionController.deleteQuestion)

module.exports = router
