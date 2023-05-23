const express =  require('express')
const routes = require('./routes')

const app = express()
const port = 5000

routes(app)

app.listen(port, () => console.log(`Servidor no localhost:${port}`) )

module.exports = app 