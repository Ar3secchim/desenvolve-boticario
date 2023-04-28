import {create} from '../client/index.js'

const form = document.querySelector('[data-form]')

form.addEventListener("submit", (event) => {
  event.preventDefault()

  const nome = event.target.querySelector('[data-name]').value
  const email = event.target.querySelector('[data-email]').value
  const pass = event.target.querySelector('[data-password]').value
  const dataNascimento = event.target.querySelector('[data-dataNascimento]').value
  const cpf = event.target.querySelector('[data-cpf]').value
  const cep = event.target.querySelector('[data-cep]').value
  const logradouro = event.target.querySelector('[data-lagradouro]').value
  const city = event.target.querySelector('[data-city]').value
  const state = event.target.querySelector('[data-state]').value

  const render = async () => {
    try{
      await create(nome, email, pass, dataNascimento, cpf, cep, logradouro, city, state)
      .then(() => {
        window.location.href = '../register-client/register-concluded/index.html'    
      })
    }catch(Error){
      console.log(Error)
      window.location.href = 'http://localhost:5501/form-validation/error/index.html'
    }
  }
  render()

})