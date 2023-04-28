import {list, clean} from '../client/index.js'

const clientContent = (nome, email, id) => {
  const url = new URL(window.location)
  const pathName = url.pathname

  const lineTableClient = document.createElement('tr')
  const content = `
    <td class="td" data-td >${nome}</td>
    <td >${email}</td>
    <td>
        <ul class="tabela__botoes-controle">
          ${pathName == '/form-validation/index.html' ? `<li><a href="./register-client/edit-client/index.html?id=${id}" class="botao-simples botao-simples--editar">Editar</a></li>` 
          : `<li><a href="../../register-client/edit-client/index.html?id=${id}" class="botao-simples botao-simples--editar">Editar</a></li>`}
           
            <li><button data-id=${id} class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
        </ul>
    </td>
  `

  lineTableClient.innerHTML = content
  lineTableClient.dataset.id = id
  return lineTableClient
}

const table = document.getElementById('data-tabela')
table.addEventListener('click', async (event) => {
  const deleteButton =  event.target.className == 'botao-simples botao-simples--excluir'
  
  if(deleteButton){
    try{
      await clean(event.target.dataset.id)
    }catch(Error){
      console.log(Error)
      window.location.href = 'http://localhost:5501/form-validation/error/index.html'
    } 
  }
})

const render = async () => {
  try{
    await list().then(data => {
      data.forEach(client => {
        table.appendChild(clientContent(client.nome, client.email, client.id))
      })
    })
  }catch(Error){
    window.location.href = 'http://localhost:5501/form-validation/error/index.html'
  }
}

render ()