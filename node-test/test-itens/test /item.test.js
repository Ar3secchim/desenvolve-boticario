import Item from '../item'

describe('Teste dos items', () =>{
  test('Deve ter ', () => { 
    const item = new Item('Beterraba', 2.5 , 10);

    expect(item.nome).toBe('Beterraba')
    expect(item.valor).toBe(2.5)
    expect(item.quantidade).toBe(10)
  })

  test('', () =>{
    const item = new Item('Batata', 0.3 , 10)

    expect(item.pegaValorTotalItem()).toBe(3)
  })
})