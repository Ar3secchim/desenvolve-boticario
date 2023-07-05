import { fireEvent, render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import { useListaParticipantes } from "../../state/hooks/useListaParticipantes";
import { useResultadoSorteio } from "../../state/hooks/useResultadoSorteio";
import Sorteio from "./Sorteio";

jest.mock('../../state/hooks/useListaParticipantes', ()=>{
  return{
    useListaParticipantes: jest.fn()
  }
})

jest.mock('../../state/hooks/useResultadoSorteio',()=>{
  return{
    useResultadoSorteio: jest.fn()
  }
})

describe('na pagina de sorteio', () =>{
  const participations = ['ana', 'Catarina', 'Jorel']
  const resultado = new Map([
    ['ana','Jorel'],
    ['Jorel', 'Catarina'],
    ['Catarina', 'ana']
  ])

  beforeEach(()=>{
    (useListaParticipantes as jest.Mock).mockReturnValue(participations);
    (useResultadoSorteio as jest.Mock).mockReturnValue(resultado);
  })

  test('todos os participantes pode exibir seu amigo secreto',()=>{
    render(
      <RecoilRoot>
        <Sorteio />
      </RecoilRoot>
    )
    const opçoes = screen.queryAllByRole('option')
    expect(opçoes).toHaveLength(participations.length +1)
  })

  test('o amigo secreto é exibido quando solicitado', ()=>{
    render(
      <RecoilRoot>
        <Sorteio />
      </RecoilRoot>
    )
    const select = screen.getByPlaceholderText('Selecione o seu nome')
    fireEvent.change(select, {
      target:{
        value: participations
      }
    })

    const botao = screen.getByRole('button')
    fireEvent.click(botao)

    const amigoSecreto = screen.getByRole('alert')
    expect(amigoSecreto).toBeInTheDocument()
  })
})  

