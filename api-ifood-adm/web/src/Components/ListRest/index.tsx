import React, { useEffect, useState } from 'react'
import axios from 'axios'
import IRestaurante from '../../Types/IRestaurante'
import IPaginacao from '../../Types/IPaginacao'

import Restaurante from './Restaurante'
import style from './ListaRestaurantes.module.scss'
import IPrato from '../../Types/IPrato'

const ListaRestaurantes = () => {
	const [restaurantes, setRestaurantes] = useState<IRestaurante[]>([])
	const [nextpage , setNextPage] = useState('')

	useEffect(()=> {
		axios.get<IPaginacao<IRestaurante>>('http://localhost:8000/api/v1/restaurantes/')
			.then(res => {
				setRestaurantes(res.data.results)
				setNextPage(res.data.next)
			}).catch(erro => console.log(erro))
	},[])

	function viewMoreRestaurantes(){
		axios.get<IPaginacao<IRestaurante>>(nextpage)
			.then(res => {
				setRestaurantes([...restaurantes, ...res.data.results])
				setNextPage(res.data.next)
			}).catch(erro => console.log(erro))
	}

	return (
		<section className={style.ListaRestaurantes}>
			<h1>Os restaurantes mais <em>bacanas</em>!</h1>
			{restaurantes?.map(item => <Restaurante restaurante={item} key={item.id} />)}
			{nextpage && <button onClick={viewMoreRestaurantes}>
				ver mais
			</button>}
		</section>
	)
}

export default ListaRestaurantes