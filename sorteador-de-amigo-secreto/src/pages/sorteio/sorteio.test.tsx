import { render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import { useListaParticipantes } from "../../state/hooks/useListaParticipantes";
import Sorteio from "./Sorteio";

jest.mock('../../state/hooks/useListaParticipantes', ()=>{
  return{
    useListaParticipantes: jest.fn()
  }
})

describe('na pagina de sorteio', () =>{
  const participations = ['ana', 'mirela', 'paula']

  beforeEach(()=>{
    (useListaParticipantes as jest.Mock).mockReturnValue(participations)
  })

  test('todos os participantes pode exibir seu amigo secreto',()=>{
    render(
      <RecoilRoot>
        <Sorteio />
      </RecoilRoot>
    )
    const opçoes = screen.queryAllByRole('option')
    expect(opçoes).toHaveLength(participations.length)
  })
})  