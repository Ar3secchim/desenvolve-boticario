const posts = require('./src/posts');
const usuarios = require('./src/usuarios');

module.exports = app => {
  app.get('/', (req, res) => {res.send('Hellou Word')});
  
  posts.routes(app);
  usuarios.routes(app);
};