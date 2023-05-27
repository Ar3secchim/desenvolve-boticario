module.exports = {
  routes: require('./usuarios-rotas'),
  controlador: require('./usuarios-controlador'),
  modelo: require('./usuarios-modelo'),
  estrategiasAutenticacao: require('./estrategias-autenticacao'),
  middlewaresAutenticacao : require('./middlewares.autenticacao')
}