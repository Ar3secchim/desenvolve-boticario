import { render } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import App from "../App";


const mockNavigation = jest.fn()

jest.mock('react-router-dom', ()=>{
  return{
    useNavigate: () => mockNavigation
  }
})

describe('a pagina de configuração',()=>{
  test('config pages',()=>{
    const {container} = render(
      <RecoilRoot>
        <App />
      </RecoilRoot>
    )
    expect(container).toMatchSnapshot()
  })
})