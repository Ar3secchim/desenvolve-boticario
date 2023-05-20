import express from 'express'
import db from './config/dbConnect.js'

db.on("error", console.log.bind(console, ))

const app = express()
app.use(express.json())

const books = [
	{
		name: "renara",
		id: "1"
	},
	{
		name: "ane",
		id: "2"
	},
]

app.get('/books', (req, res) => {
	res.status(200).json(books)
})

app.post('/books', (req, res) => {
	books.push(req.body)
	res.status(201).send('livro cadastrado')
})

app.put('/books/:id', (req, res) => {
	let index = findBook(req.params.id)
	books[index].name = req.body.name

	res.status(200).json(books)
})

function findBook (id){
	return books.findIndex(book=> book.id == id)
}

app.delete('/books/:id', (req, res)=>{
	let {id} = req.params
	let index = findBook(id)
	books.splice(index, 1)

	res.send(`Books delete ${id}`)
})

export default app
