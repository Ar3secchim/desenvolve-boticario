import mongoose from "mongoose"

const booksSchema = new mongoose.Schema(
  {
    id: {type: String},
    title: {type: String, require:true},
    autor: {type: mongoose.Schema.Types.ObjectId, ref: 'autor'},
    edit:{type: String},
    numberPages:{type: Number}
 } 
)

const books = mongoose.model('books', booksSchema)

export default books