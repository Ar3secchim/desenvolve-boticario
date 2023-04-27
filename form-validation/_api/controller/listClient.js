import {list, clean} from '../client/index.js'

const clientContent = (nome, email, id) => {
  const lineTableClient = document.createElement('tr')
  const content = `
    <td class="td" data-td >${nome}</td>
    <td >${email}</td>
    <td>
        <ul class="tabela__botoes-controle">
            <li><a href="../edit-client/index.html?id=${id}" class="botao-simples botao-simples--editar">Editar</a></li>
            <li><button data-id=${id} class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
        </ul>
    </td>
  `
  lineTableClient.innerHTML = content
  lineTableClient.dataset.id = id
  return lineTableClient
}

const table = document.getElementById('data-tabela')
table.addEventListener('click', (event) => {
  console.log(event.target.dataset.id)  
  event.target.className == 'botao-simples botao-simples--excluir' ? clean(event.target.dataset.id) :''
})

list()
.then((data) => {
  data.forEach(client => {
    table.appendChild(clientContent(client.nome, client.email, client.id))
  })
}
).catch(() => {
  alert('Não foi possível carregar a lista de clientes')
})