import realizaSorteio from "./realizaSorteio";

describe('dado um sorteio de amigo secreto', () =>{
  test('não sortei o mesmo nome', () =>{
    const participantes = ['ana', 'julia','joao', 'renara']

    const sorteio = realizaSorteio(participantes)

    participantes.forEach( participante => {
      const amigoSecreto = sorteio.get(participante)
      expect(amigoSecreto).not.toEqual(participante)
    });
  })
})