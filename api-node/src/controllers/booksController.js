import books from '../models/books.js'

class booksController {
	static listBooks = (req , res) => {
		books.find(res.status(200).json(books))
	}

	static createBooks = (req, res) => {
		let book = new books(req.body)
		book.save(res.status(201).send({book}))
	}

	static updateBooks = (req, res) =>{
		const id = req.params.id

		books.findByIdAndUpdate(id, {$set: req.body}, 
			res.status(200).send({message: "ok"})
		)
	}

	static deleteBooks = (req, res) =>{
		const id = req.params.id
		books.findByIdAndDelete(id, res.status(200).send( { message:"livro removido"} ))
	}
}

export default booksController