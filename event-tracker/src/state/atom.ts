import { atom } from 'recoil'
import { IEvento } from '../interfaces/IEvento'
import { IFiltrosDeEventos } from '../interfaces/IfiltrosDeEventos'
import { eventoAsync } from './seletores'

export const listaDeEventosState = atom<IEvento[]>({
	key: 'ListaDeEventosState',
	default: eventoAsync
})

export const FiltrosDeEventos = atom<IFiltrosDeEventos>({
	key: 'filtroDEventos',
	default: {},
})
