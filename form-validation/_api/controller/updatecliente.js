import { detailsCliente, update } from "../client/index.js"

const url = new URL(window.location)
const id = url.searchParams.get('id')

const nome = document.querySelector('[data-name]')
const email = document.querySelector('[data-email]')
const dataNascimento = document.querySelector('[data-dataNascimento]')
const cpf = document.querySelector('[data-cpf]')
const cep = document.querySelector('[data-cep]')
const logradouro = document.querySelector('[data-lagradouro]')
const city = document.querySelector('[data-city]')
const state = document.querySelector('[data-state]')

detailsCliente(id)
.then((data) => {
  nome.value = data.nome
  email.value = data.email
  dataNascimento.value = data.dataNascimento
  cpf.value = data.cpf
  cep.value = data.adress.cep
  logradouro.value = data.adress.logradouro
  city.value = data.adress.city
  state.value = data.adress.state
})
.catch(() => {
  alert('Não foi possível carregar o cliente')
})

const form = document.querySelector('[data-form]')
form.addEventListener('submit', (event) => {
  event.preventDefault()
  update(id, nome.value, email.value, cpf.value, dataNascimento.value, cep.value, logradouro.value, city.value, state.value)
  .then(() => {
    window.location.href = '../../register-client/list_client/index.html'    
  })
})