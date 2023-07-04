import { fireEvent, render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import { useListaParticipantes } from "../../state/hooks/useListaParticipantes";
import Footer from "./Footer";

jest.mock('../../state/hooks/useListaParticipantes', ()=>{
  return{
    useListaParticipantes: jest.fn()
  }
})

const mockNavigation = jest.fn()

jest.mock('react-router-dom', ()=>{
  return{
    useNavigate: () => mockNavigation
  }
})

describe('Onde não existem participantes suficientes', () =>{
  beforeEach(()=>{
    (useListaParticipantes as jest.Mock).mockReturnValue([])
  })
  test('a brincadeira não pode ser iniciada', () =>{
    render(
      <RecoilRoot>
        <Footer />
      </RecoilRoot>
    )

    const button = screen.getByRole('button')

    expect(button).toBeDisabled()
  })
})

describe('quando existem participantes suficiente',()=>{
  beforeEach(()=>{
    (useListaParticipantes as jest.Mock).mockReturnValue(['ana', 'catarina', 'maria'])
  })

  test('a brincadeira não pode ser iniciada', () =>{
    render(
      <RecoilRoot>
        <Footer />
      </RecoilRoot>
    )

    const button = screen.getByRole('button')
    expect(button).toBeEnabled()
  })

  test('a brincadeira foi iniciada', () =>{
    render(
      <RecoilRoot>
        <Footer />
      </RecoilRoot>
    )
    const button = screen.getByRole('button')
    fireEvent.click(button)

    expect(mockNavigation).toHaveBeenCalledTimes(1)
    expect(mockNavigation).toHaveBeenCalledWith('/sorteio')
  })
})