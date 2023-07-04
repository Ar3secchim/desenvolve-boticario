import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import App from './App';
import Header from './componentes/Cabecalho';

export const Router = () =>{
  return(
    <BrowserRouter>
    <RecoilRoot>
      <Routes>
      <Header />
        <Route path='/' element={App} />
        <Route path='/sorteio' element={App} />
      </Routes>
    </RecoilRoot>
  </BrowserRouter>
  )
}