const router = require('express').Router()
const userController = require('../controllers/user-controller')
const auth = require('../middlewares/auth-middleware')
const { userAlredyExist } = require('../middlewares/validation-middleware')

router.post('/register', userAlredyExist, userController.registerUser)
router.post('/login', userController.loginUser)
router.post('/logout', auth, userController.logoutUser)
router.put('/:id', auth, userController.updateUser)
router.delete('/:id', auth, userController.deleteUser)

module.exports = router
