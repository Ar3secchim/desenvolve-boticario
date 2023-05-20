const express =  require('express')
const bodyParser = require('body-parser')

const app = express()
const port = 5000

app.use(bodyParser.json())

app.get('/', (req, res) => res
  .status(200)
  .send({ mensagem: "Hello World"}
))

app.listen(port, () => console.log(`Servidor no localhost:${port}`) )

module.exports = app 