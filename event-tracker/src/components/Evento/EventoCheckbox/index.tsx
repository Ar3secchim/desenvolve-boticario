import React from 'react'
import { IEvento } from '../../../interfaces/IEvento'
import useAtualizarEventos from '../../../state/hooks/useAtualizarEventos'

const EventoCheckbox: React.FC<{ evento: IEvento}> = ({ evento }) => {
	const atualizaEvento =  useAtualizarEventos()
	const estilos = [
		'far',
		'fa-2x',
		evento.completo ? 'fa-check-square' : 'fa-square'
	]

	const alterarStatus = ()=>{
		const eventoAlterado ={
			...evento
		}
		eventoAlterado.completo = !eventoAlterado.completo
		atualizaEvento(eventoAlterado)
	}

	return (<i className={estilos.join(' ')} onClick={alterarStatus}></i>)
}

export default EventoCheckbox