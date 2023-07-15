import Carrinho from './carrinho';
import Item from './item';

describe('Teste do carrinho', () =>{
  test('Deve inicializar vazio', () => { 
    const carrinho = new Carrinho();
    expect(carrinho.subtotal).toBeNull()
  })

  test('Deve ter items', ()=>{
    const item = new Item('banana', 2.5, 5);
    const item2 = new Item('maça', 0.5,1)

    const carrinho = new Carrinho();
    carrinho.adiciona(item)
    carrinho.adiciona(item2)

    expect(typeof carrinho).toBe('object')
    expect(carrinho.itens).toContain(item)
    expect(carrinho.itens).toContain(item2)
  })

  test('Deve ter a propriedade total', () => { 
    const carrinho = new Carrinho()
    expect(carrinho).toHaveProperty("total")
  })

  test('Deve lança erro ao finalizar compra com carrinho vazio', ()=>{
    function capturaErrorCarrinho(){
      const carrinho = new Carrinho()
      carrinho.finalizaCompra()
    }

    expect(capturaErrorCarrinho).toThrowError('Carrinho de compras vazio')
  })

  test('adicionar o frete', ()=>{
    const carrinho = new Carrinho()

    carrinho.adicionaFrete(10)

    expect(carrinho.frete).toBe(10)
  })

  test('adicionar o frete', ()=>{
    const item = new Item('banana', 2.5, 5);
    const item2 = new Item('maça', 0.5,1)
    const carrinho = new Carrinho();

    carrinho.adiciona(item)
    carrinho.adiciona(item2)
    
    carrinho.adicionaFrete(10)

    carrinho.finalizaCompra()
    
    expect(carrinho.finalizaCompra()).toStrictEqual(
      {"frete": 10, "subtotal": 13, "total": 23}
    )
  })
})