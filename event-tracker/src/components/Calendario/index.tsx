import React from 'react'
import ptBR from './localizacao/ptBR.json'

import style from './Calendario.module.scss'

import Kalend, { CalendarEvent, CalendarView, OnEventDragFinish } from 'kalend'
import 'kalend/dist/styles/index.css'
import useListaDeEventos from '../../state/hooks/UseListaDeEventos'
import useAtualizarEventos from '../../state/hooks/useAtualizarEventos'

interface IKalendEvento {
	id?: number
	startAt: string
	endAt: string
	summary: string
	color: string
}

const Calendario: React.FC = () => {
	const eventosKalend = new Map<string, IKalendEvento[]>()
	const eventos = useListaDeEventos()
	const atualizaEvento = useAtualizarEventos()

	eventos.forEach((evento) => {
		const chave = evento.inicio.toISOString().slice(0, 10)
		if (!eventosKalend.has(chave)) {
			eventosKalend.set(chave, [])
		}
		eventosKalend.get(chave)?.push({
			id: evento.id,
			startAt: evento.inicio.toISOString(),
			endAt: evento.fim.toISOString(),
			summary: evento.descricao,
			color: 'blue',
		})
	})

	const onEventDragFinish: OnEventDragFinish = (
		kalendEventoInalterado: CalendarEvent,
		kalendEventoAtualizado: CalendarEvent
	) => {
		const evento = eventos.find(
			(event) => event.descricao === kalendEventoAtualizado.summary
		)
		if (evento) {
			const updateEvento = {
				...evento,
			}
			updateEvento.inicio = new Date(kalendEventoAtualizado.startAt)
			updateEvento.fim = new Date(kalendEventoAtualizado.endAt)
			atualizaEvento(updateEvento)
		}
	}
	return (
		<div className={style.Container}>
			<Kalend
				events={Object.fromEntries(eventosKalend)}
				initialDate={new Date().toISOString()}
				hourHeight={60}
				initialView={CalendarView.WEEK}
				timeFormat={'24'}
				weekDayStart={'Monday'}
				calendarIDsHidden={['work']}
				language={'customLanguage'}
				customLanguage={ptBR}
				onEventDragFinish={onEventDragFinish}
			/>
		</div>
	)
}

export default Calendario
