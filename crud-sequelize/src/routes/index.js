const bodyParser = require('body-parser')
const users = require('./usersRoutes')


module.exports = app => {
  app.use(
    bodyParser.json(),
    users
  )
}