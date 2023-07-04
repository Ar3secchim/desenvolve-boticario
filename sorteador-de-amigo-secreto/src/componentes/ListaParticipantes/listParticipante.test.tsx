import { render, screen } from "@testing-library/react"
import { RecoilRoot } from "recoil"
import { ListaParticipantes } from "./ListaParticipantes"
import { useListaParticipantes } from "../../state/hooks/useListaParticipantes"

jest.mock('../../state/hooks/useListaParticipantes', ()=>{
  return{
    useListaParticipantes: jest.fn()
  }
})

describe('uma lista vazia', ()=>{
  beforeEach(()=>{
    (useListaParticipantes as jest.Mock).mockReturnValue([])
  })
  test('uma lista vazia',()=>{
    render(
      <RecoilRoot>
        <ListaParticipantes />
      </RecoilRoot>
    )
  
    const items =  screen.queryAllByRole('listItem')
    expect(items).toHaveLength(0)
  })

})

describe('uma lista preenchida', ()=>{
  const participantes = ['ana', 'clara']
   beforeEach(()=>{
    (useListaParticipantes as jest.Mock).mockReturnValue(participantes)
  })

  test('uma lista preenchida', ()=>{
    render(
      <RecoilRoot>
        <ListaParticipantes />
      </RecoilRoot>
    )
    const items =  screen.queryAllByRole('listitem')
    expect(items).toHaveLength(participantes.length)
  })
})