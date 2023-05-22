import mongoose from 'mongoose'

const username = "renara";
const password = "renara";
const cluster = "books.q7hxazw";
const dbname = "books-library"

mongoose.connect(
	`mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`
)

let db  = mongoose.connection
export default db