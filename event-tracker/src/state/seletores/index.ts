import { selector } from 'recoil'
import { IEvento } from '../../interfaces/IEvento'
import { FiltrosDeEventos, listaDeEventosState } from '../atom'

export const eventosFiltradosState = selector({
	key: 'eventosFiltradosState',
	get: ({ get }) => {
		const filtro = get(FiltrosDeEventos)
		const todosOsEventos = get(listaDeEventosState)

		const eventos = todosOsEventos.filter((evento) => {
			if (!filtro.data) {
				return true
			}
			const ehOMesmoDia =
				filtro.data.toISOString().slice(0, 10) ===
				evento.inicio.toISOString().slice(0, 10)
			return ehOMesmoDia
		})
		return eventos
	},
})

export const eventoAsync = selector({
	key: 'eventoAsync',
	get: async () => {
		const lista = await fetch('http://localhost:3000/eventos')
		const listaJson: IEvento[] = await lista.json()

		return listaJson.map((evento) => ({
			...evento,
			inicio: new Date(evento.inicio),
			fim: new Date(evento.fim),
		}))
	},
})
