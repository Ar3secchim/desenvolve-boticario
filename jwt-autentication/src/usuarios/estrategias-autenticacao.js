const passport = require('passport')
const LocalStrategy =  require('passport-local').Strategy
const bcrypt = require('bcrypt')
const BearerStrategy = require('passport-http-bearer').Strategy

const {InvalidArgumentError} = require('../erros')

const Usuario = require('./usuarios-modelo')

function verificaUsuario(usuario){
  if(!usuario){
    throw new InvalidArgumentError('não existe usuario')
  }
}

async function verificaSenha(senha, passwordHash){
  const senhaValida = await bcrypt.compare(senha, passwordHash)
  if(!senhaValida){
    throw new  InvalidArgumentError('email o senha invalidos')
  }
}

passport.use(
  new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    session: false
  },async  (email, senha, done) =>{
    try{
      const usuario = Usuario.buscaPorEmail(email)
      verificaUsuario(usuario)
      await verificaSenha(senha, usuario.passwordHash)

      done(null, usuario)
    }catch(erro){
      done(erro)
    }
  })
)

passport.use(
  new BearerStrategy(
    async (token, done)=>{
      try{
        const payload = jwt.verify(token, process.env.CHAVE_JWR)
        const usuario = await Usuario.buscaPorId(payload.id)
        done(null,usuario)
      }catch(erro){
        done(erro)
      }
    }
  )
)