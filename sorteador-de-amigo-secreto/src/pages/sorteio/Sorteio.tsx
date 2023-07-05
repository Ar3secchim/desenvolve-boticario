import { useState } from "react"
import { useListaParticipantes } from "../../state/hooks/useListaParticipantes"
import { useResultadoSorteio } from "../../state/hooks/useResultadoSorteio"

const Sorteio = () =>{
  const listParticipantes = useListaParticipantes()

  const [participanteDaVez,setParticipanteDaVez ] = useState('')
  const [amigoSecreto,setAmigoSecreto] = useState('')

  const resultado = useResultadoSorteio()

  const sortear = (event: React.FormEvent<HTMLFormElement>) =>{
    event.preventDefault()

    if(resultado.has(participanteDaVez)){
      setAmigoSecreto(resultado.get(participanteDaVez)!)
    }
  }

  return(
    <section>
      <form onSubmit={sortear}>
        <select  
          required 
          name="participantesDaVez" 
          id="particitantesDaVez" 
          placeholder="Selecione o seu nome"
          value={participanteDaVez}
          onChange={event => setParticipanteDaVez(event.target.value)}
          >
            <option>Selecione seu nome</option>
            {listParticipantes.map(participantes => <option key={participantes}> {participantes}</option>)}
        </select>
        <button >Sortear</button>
        {!amigoSecreto && <p role="alert" >{amigoSecreto}</p>}
      </form>
    </section>
  )
}

export default Sorteio