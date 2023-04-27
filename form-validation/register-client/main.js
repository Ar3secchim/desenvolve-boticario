export function validation(input) {
  const typeInput = input.dataset.tipo

  if(validator[typeInput]) {
      validator[typeInput](input)
  }

  if(input.validity.valid){
      input.parentElement.classList.remove('input-container--invalid')
  }else{
      input.parentElement.classList.add('input-container--invalid')
  }
}

const validator = {
  dataNascimento:input => validaDataNascimento(input)
}

function validaDataNascimento(input) {
  const dateRequest = new Date(input.value)
  let mensage = ''

  if(!olderDate(dateRequest)) {
      mensage = 'Você deve ser maior que 18 anos para se cadastrar.'
  }

  input.setCustomValidity(mensage)
}

function olderDate(data) {
  const date = new Date()
  const olderDate = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate())

  return olderDate <= date
}

export function validaCPF(input) {
  const cpfFormatado = input.value.replace(/\D/g, '')
  let mensagem = ''

  if(!checaCPFRepetido(cpfFormatado) || !checaEstruturaCPF(cpfFormatado)) {
      mensagem = 'O CPF digitado não é válido.'
  }

  input.setCustomValidity(mensagem)
}

function checaCPFRepetido(cpf) {
  const valoresRepetidos = [
      '00000000000',
      '11111111111',
      '22222222222',
      '33333333333',
      '44444444444',
      '55555555555',
      '66666666666',
      '77777777777',
      '88888888888',
      '99999999999'
  ]
  let cpfValido = true

  valoresRepetidos.forEach(valor => {
      if(valor == cpf) {
          cpfValido = false
      }
  })

  return cpfValido
}

function checaEstruturaCPF(cpf) {
  const multiplicador = 10

  return checaDigitoVerificador(cpf, multiplicador)
}

function checaDigitoVerificador(cpf, multiplicador) {
  if(multiplicador >= 12) {
      return true
  }

  let multiplicadorInicial = multiplicador
  let soma = 0
  const cpfSemDigitos = cpf.substr(0, multiplicador - 1).split('')
  const digitoVerificador = cpf.charAt(multiplicador - 1)
  for(let contador = 0; multiplicadorInicial > 1 ; multiplicadorInicial--) {
      soma = soma + cpfSemDigitos[contador] * multiplicadorInicial
      contador++
  }

  if(digitoVerificador == confirmaDigito(soma)) {
      return checaDigitoVerificador(cpf, multiplicador + 1)
  }

  return false
}

function confirmaDigito(soma) {
  return 11 - (soma % 11)
}

function recuperarCEP(input) {
  const cep = input.value.replace(/\D/g, '')
  const url = `https://viacep.com.br/ws/${cep}/json/`
  const options = {
      method: 'GET',
      mode: 'cors',
      headers: {
          'content-type': 'application/json;charset=utf-8'
      }
  }

  if(!input.validity.patternMismatch && !input.validity.valueMissing) {
      fetch(url,options).then(
          response => response.json()
      ).then(
          data => {
              if(data.erro) {
                  input.setCustomValidity('Não foi possível buscar o CEP.')
                  return
              }
              input.setCustomValidity('')
              preencheCamposComCEP(data)
              return
          }
      )
  }
}

function preencheCamposComCEP(data) {
  const logradouro = document.querySelector('[data-tipo="logradouro"]')
  const cidade = document.querySelector('[data-tipo="cidade"]')
  const estado = document.querySelector('[data-tipo="estado"]')

  logradouro.value = data.logradouro
  cidade.value = data.localidade
  estado.value = data.uf
}