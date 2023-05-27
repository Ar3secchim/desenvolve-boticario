const { Router } = require('express')
const UsersController = require('../controllers/UsersController')

const router = Router()

router
  .get('/users', UsersController.pullAllUsers)
  .get('/users/:id', UsersController.findOneUsers)
  .post('/users', UsersController.createUsers)
  .put('/users/:id', UsersController.updateUsers)
  .delete('/users', UsersController.deleteUsers)

module.exports = router