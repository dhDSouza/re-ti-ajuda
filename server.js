require('dotenv').config()
const express = require('express')
const session = require('express-session')
const sequelize = require('./config/connection')
const userRoute = require('./routes/user-routes')
const questionRoute = require('./routes/question-routes')
const answerRoute = require('./routes/answer-routes')
const errorHandler = require('./middlewares/error-middleware')

const app = express()
const port = process.env.PORT || 3000
const { SECRET_KEY } = process.env

app.use(express.json())
app.use(session({
	secret: SECRET_KEY,
	resave: false,
	saveUninitialized: true,
}))

app.use('/api/user', userRoute)
app.use('/api/question', questionRoute)
app.use('/api/answer', answerRoute)

app.use(errorHandler)

sequelize.authenticate().then(async () => {
	console.log('Conexão com o banco de dados estabelecida com sucesso.')
	try {
		await sequelize.sync()
		console.log('Sincronização realizada com sucesso')
		app.listen(port, () => {
			console.log(`Servidor iniciado na porta ${port}`)
		})
	} catch (error) {
		console.log('Erro ao sincronizar o banco de dados:', error)
	}
}).catch((error) => {
	console.log('Erro ao conectar com o banco de dados:', error)
})
