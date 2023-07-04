import { useSetRecoilState } from 'recoil'
import { IEvento } from '../../interfaces/IEvento'
import { listaDeEventosState } from '../atom'

const useAtualizarEventos = () =>{
	const setListaEvento = useSetRecoilState<IEvento[]>(listaDeEventosState)
	return (evento: IEvento) => {
		return 	setListaEvento(listaAntiga => {
			const indice = listaAntiga.findIndex(event => event.id === evento.id)
			return [...listaAntiga.slice(0,indice), evento, ...listaAntiga.slice(indice + 1)]
		})
	}
}
export default useAtualizarEventos
