import autor from '../models/autor.js'

class autorController {
	static listAutor= (req , res) => {
		autor.find(res.status(200).json(autor))
	}

	static createAutor = (req, res) => {
		let autor = new autor(req.body)
		autor.save(res.status(201).send({autor}))
	}

	static updateAutor = (req, res) =>{
		const id = req.params.id

		autor.findByIdAndUpdate(id, {$set: req.body}, 
			res.status(200).send({message: "ok"})
		)
	}

	static deleteAutor = (req, res) =>{
		const id = req.params.id
		autor.findByIdAndDelete(id, res.status(200).send({message:"Autor removido"}))
	}
}

export default autorController