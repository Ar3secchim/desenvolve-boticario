const routes = require('../routes')
const UsersController = require('../controllers/UsersController')


const router = routes()

router
  .get('/users', UsersController.pullAllUsers)
  .get('/users/:id', UsersController.pullOneUsers)
  .post('/users', UsersController.createUsers)
  .put('/users/:id', UsersController.updateUsers)
  .delete('/users', UsersController.deleteUsers)

module.exports = router