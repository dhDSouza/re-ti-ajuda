function errorHandler(err, req, res) {
	console.error(err)
  
	if (err) {
		return res.status(err.statusCode).json({ error: err.message })
	}

	return res.status(500).json({ error: 'Erro interno do servidor' })
}
  
module.exports = errorHandler
