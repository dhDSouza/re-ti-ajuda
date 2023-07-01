const router = require('express').Router()
const questionController = require('../controllers/question-controller')
const auth = require('../middlewares/auth-middleware')
const { questionNotFound } = require('../middlewares/validation-middleware')

router.get('/', auth, questionController.findAllQuestions)
router.post('/', auth, questionController.createQuestion)
router.put('/:id', auth, questionNotFound, questionController.updateQuestion)
router.delete('/:id', auth, questionNotFound, questionController.deleteQuestion)

module.exports = router
