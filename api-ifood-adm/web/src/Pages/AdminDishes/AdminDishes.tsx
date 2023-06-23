import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button,Paper,Table, TableBody, TableCell, 
	TableContainer, TableHead, TableRow} from '@mui/material'

import http from '../../http'
import IPratos from '../../Types/IPrato'

function AdminDishes(){
	const [listDishes, SetListDishes] = useState<IPratos[]>([])
	
	useEffect(()=>{
		http.get('pratos/') 
			.then(res => SetListDishes(res.data))
			.catch(erro => console.log(erro))
	},[]
	)

	const deleteRestaurante = (dishesRemove: IPratos) =>{
		http.delete(`restaurantes/${dishesRemove.id}/`)
			.then(()=> {
				const newListDishes = listDishes.filter(dishe => dishe.id !== dishesRemove.id)
				SetListDishes(newListDishes)
			})
	}

	return(
		<>
			<TableContainer component={Paper}>
				<Table>
					<TableHead>
						<TableRow> 
							<TableCell>
								<strong>Imagem</strong>
							</TableCell>
							<TableCell>
								<strong>Nome do prato </strong>
							</TableCell>
							<TableCell>
								<strong>Descrição</strong>
							</TableCell>
							<TableCell>
								<strong>Tag</strong>
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
						{listDishes.map((dishe) =>{
							return(
								<TableRow key={dishe.id}>
									<TableCell >
										<a href={dishe.imagem} rel='noreferrer' target='_blank'>Ver imagem </a>
									</TableCell> 
									<TableCell >
										{dishe.nome}
									</TableCell> 
									<TableCell >
										{dishe.descricao}
									</TableCell> 
									<TableCell >
										{dishe.tag}
									</TableCell> 
									<TableCell >
										<Link to={`/admin/prato/${dishe.id}`}>
											Editar
										</Link>
									</TableCell> 

									<TableCell >
										<Button variant='outlined' color='error' onClick={()=> deleteRestaurante(dishe)}>
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

export default AdminDishes