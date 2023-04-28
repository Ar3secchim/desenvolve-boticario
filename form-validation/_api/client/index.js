export const list = async () => {
  const list =  await fetch('http://localhost:3000/profile')
  .then(res => res.json())
  .catch(err => {
    throw new Error('Não foi possível listar os clientes')
  })
  return list
}

export const create = async (nome, email, pass, dataNascimento, cpf, cep, logradouro, city, state) => {
  return await fetch('http://localhost:3000/profile', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      nome,
      email,
      pass,
      dataNascimento,
      cpf,
      adress:{
        cep,
        logradouro,
        city,
        state
      },
    })
  }).then(res => res.body)
  .catch(err => {
    throw new Error('Não foi possível cadastrar o cliente')
  })
}

export const clean = async (id) => {
  return await fetch(`http://localhost:3000/profile/${id}`, {
    method: 'DELETE',
  }).catch(err => {
    throw new Error('Não foi possível excluir o cliente')
  })
}

export const detailsCliente = async (id) => {
  return await fetch(`http://localhost:3000/profile/${id}`)
  .then(res => res.json())
}

export const update = async (id, nome, email, pass, dataNascimento, cpf, cep, logradouro, city, state) => {
    return await fetch(`http://localhost:3000/profile/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        nome,
        email,
        pass,
        dataNascimento,
        cpf,
        adress:{
          cep,
          logradouro,
          city,
          state
        },
      })
    }).then(res => {
      res.body
    }).catch(err => {
      throw new Error('Não foi possível atualizar o cliente')
    })
}