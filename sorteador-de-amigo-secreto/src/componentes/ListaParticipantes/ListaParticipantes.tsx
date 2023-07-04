import { useListaParticipantes } from "../../state/hooks/useListaParticipantes"

export const ListaParticipantes =()=>{
  const participantes : string[] = useListaParticipantes()
  
  return(
    <ul>
      {participantes.map(participante =>{
        return <li key={participante}>{participante}</li>
      })}
    </ul>
  )
}