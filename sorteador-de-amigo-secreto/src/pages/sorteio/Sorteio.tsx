import { useListaParticipantes } from "../../state/hooks/useListaParticipantes"

const Sorteio = () =>{
  const listParticipantes = useListaParticipantes()
  return(
    <section>
      <form action="select">
        <select name="participantesDaVez" id="particitantesDaVez">
          {listParticipantes.map(participantes => <option key={participantes}> {participantes}</option>)}
        </select>
      </form>
    </section>
  )
}

export default Sorteio