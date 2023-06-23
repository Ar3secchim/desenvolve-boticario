import React, { useEffect, useState } from 'react'

import http from '../../../http'
import Prato from '../Prato'
import IPrato from '../../../Types/IPrato'

import IRestaurante from '../../../Types/IRestaurante'

import estilos from './Restaurante.module.scss'

interface RestauranteProps {
  restaurante: IRestaurante
}

const Restaurante = ({ restaurante }: RestauranteProps) => {
	const [pratos, setPratos] = useState<IPrato[]>([])

	useEffect(()=>{
		http.get<IPrato[]>(`http://localhost:8000/api/v1/restaurantes/${restaurante.id}/pratos/`)
			.then(res => setPratos(res.data) )
	}, [restaurante.id])

	return (<section className={estilos.Restaurante}>
		<div className={estilos.Titulo}>
			<h2>{restaurante.nome}</h2>
		</div>
		<div>
			{pratos.map(item => <Prato prato={item} key={item.id} />)}
		</div>
	</section>)
}

export default Restaurante