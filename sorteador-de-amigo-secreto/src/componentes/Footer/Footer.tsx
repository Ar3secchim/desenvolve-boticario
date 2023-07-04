import { useNavigate } from "react-router-dom"
import { useListaParticipantes } from "../../state/hooks/useListaParticipantes"

 const Footer = () =>{
  const ListaParticipantes = useListaParticipantes()

  const NavFor = useNavigate()

  const start = () =>{
    NavFor('/sorteio')
  }
  return(
    <footer>
      <button 
        onClick={start}
        disabled={ListaParticipantes.length < 3}>Iniciar brincadeira</button>
    </footer>
  )
}

export default Footer