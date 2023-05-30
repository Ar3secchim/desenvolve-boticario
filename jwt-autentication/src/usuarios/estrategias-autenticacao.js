const {InvalidArgumentError} = require('../erros')
const Usuario = require('./usuarios-modelo')
const blacklist = require('../../regis/blacklist')

const passport = require('passport')
const bcrypt = require('bcrypt')

const LocalStrategy =  require('passport-local').Strategy
const BearerStrategy = require('passport-http-bearer').Strategy



function verificaUsuario(usuario){
  if(!usuario){
    throw new InvalidArgumentError('não existe usuario')
  }
}

async function verificaTokenBlacklist(token){
  const tokenNaBlacklist = await blacklist.contemToken(token)
  
  if(!tokenNaBlacklist){
    throw new jwt.JsonWebTokenError('token expirado')
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

      done(null, usuario, {token: token})
    }catch(erro){
      done(erro)
    }
  })
)

passport.use(
  new BearerStrategy(
    async (token, done)=>{
      try{
        await verificaTokenBlacklist(token)
        const payload = jwt.verify(token, process.env.CHAVE_JWR)
        const usuario = await Usuario.buscaPorId(payload.id)
        done(null,usuario)
      }catch(erro){
        done(erro)
      }
    }
  )
)