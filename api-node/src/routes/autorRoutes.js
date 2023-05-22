import express from "express";
import autorController from "../controllers/autorController.js";

const router = express.Router()

router
	.get('/', booksController.listAutor)
	.post('/autor', autorController.createAutor)
	.put('/autor/:id', autorController.updateAutor)
	.delete('/autor/:id',  autorController.deletAautor)

export default router