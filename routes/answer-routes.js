const router = require('express').Router()
const answerController = require('../controllers/answer-controller')
const auth = require('../middlewares/auth-middleware')
const { questionNotFound, answerNotFound } = require('../middlewares/validation-middleware')

router.get('/:id', auth, questionNotFound, answerController.findAnswerByQuestionId)
router.post('/:id', auth, questionNotFound, answerController.createAnswer)
router.put('/:id', auth, answerNotFound, answerController.updateAnswer)
router.delete('/:id', auth, answerNotFound, answerController.deleteAnswer)

module.exports = router
