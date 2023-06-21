import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button,Paper,Table, TableBody, TableCell, 
	TableContainer, TableHead, TableRow} from '@mui/material'

import http from '../../http'
import IRestaurantes from '../../Types/IRestaurante'

function AdminRestaurantes(){
	const [listRest, SetListRest] = useState<IRestaurantes[]>([])
	
	useEffect(()=>{
		http.get('restaurantes/') 
			.then(res => SetListRest(res.data))
			.catch(erro => console.log(erro))
	},[]
	)

	const deleteRestaurante = (restauranteRemove: IRestaurantes) =>{
		http.delete(`restaurantes/${restauranteRemove.id}/`)
			.then(()=> {
				const listRestaurante = listRest.filter(restaurante => restaurante.id !== restauranteRemove.id)
				SetListRest(listRestaurante)
			})
	}

	return(
		<>
			<TableContainer component={Paper}>
				<Table>
					<TableHead>
						<TableRow> 
							<TableCell>
								<strong>Nome do restraurante </strong>
							</TableCell>
							<TableCell>
								Editar
							</TableCell>
							<TableCell>
								Deletar
							</TableCell>
						</TableRow>
					</TableHead> 	

					<TableBody>
						{listRest.map((restaurante) =>{
							return(
								<TableRow key={restaurante.id}>
									<TableCell >
										{restaurante.nome}
									</TableCell> 
									<TableCell >
										<Link to={`/admin/restaurantes/${restaurante.id}`}>
											Editar
										</Link>
									</TableCell> 

									<TableCell >
										<Button variant='outlined' color='error' onClick={()=> deleteRestaurante(restaurante)}>
										Deletar
										</Button>
									</TableCell> 
								</TableRow>
							) 	
						})}
					</TableBody>
				</Table>
			</TableContainer>
		</>

	)
}

export default AdminRestaurantes