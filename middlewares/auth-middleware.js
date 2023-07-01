async function authenticate(req, res, next) {
	if (req.session.user) {
		next()
	} else {
		res.status(401).json({ message: 'Acesso não autorizado' })
	}
}
  
module.exports = authenticate
  