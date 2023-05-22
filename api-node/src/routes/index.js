import express from "express"

import books from "./booksRoutes.js"
import autor from "../models/autor.js"

const routes = (app) => {
	app.route('/').get((req, res) => {
		res.status(200).send({})
	})

	app.use(
		express.json(),
		books,
		autor
	)
}

export default routes