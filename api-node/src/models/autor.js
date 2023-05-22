import mongoose from "mongoose"

const AutorSchema = new mongoose.Schema(
  {
    id: {type: String},
    name: {type: String, require:true},
    nacionalidade: {type: String}, 
 }, 
 {
  versionKey: false
  
 }
)

const autor = mongoose.model('autor', AutorSchema)

export default autor