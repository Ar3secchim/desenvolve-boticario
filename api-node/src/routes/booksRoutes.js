import express from "express";
import booksController from "../controllers/booksController.js";

const router = express.Router()

router
	.get('/', booksController.listBooks)
	.post('/books', booksController.createBooks)
	.put('/books/:id', booksController.updateBooks)
	.delete('/books/:id',  booksController.deleteBooks)

export default router