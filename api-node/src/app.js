import express from 'express'
import routes from './routes/index.js'
import db from './config/dbConnect.js'
import books from './models/books.js'

db.on("error", console.log.bind(console, "erro de conexão"))
db.once("open", () => {
	console.log('conexão com o banco feita com sucesso')
})

const app = express()	

app.use(express.json())

routes(app)

export default app
