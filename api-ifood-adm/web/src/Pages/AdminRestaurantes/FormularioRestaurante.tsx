import React, { useEffect, useState } from 'react' 
import { Box, Button,  TextField,  Typography } from '@mui/material'
import {  useParams } from 'react-router-dom'

import http from '../../http'
import IRestaurante from '../../Types/IRestaurante'

function FormularioRestaurante(){
	const params = useParams()

	useEffect(()=>{
		if(params.id){
			http.get<IRestaurante>(`restaurantes/${params.id}/`)
				.then(res => SetNomeRestaurant(res.data.nome))
		}
	},[params])

	const [nomeRestaurante , SetNomeRestaurant] = useState('')

	const submitForm = (event: React.FormEvent<HTMLFormElement>)=>{
		event.preventDefault()

		if(params.id){
			http.put(`restaurantes/${params.id}/`, {
				nome: nomeRestaurante
			}).then(()=> alert('Restauarnde atualizado com sucesso') )
				.catch(erro => console.log(erro))
		}else{
			http.post('restaurantes/', {
				nome: nomeRestaurante
			}).then(()=> alert('Restaurante cadastrado com sucesso'))
				.catch(erro => console.log(erro))
		}
	}

	return(
		<>
			<Box sx={{display: 'flex', flexDirection: 'column',  alignItems:'center', height:500, justifyContent:'center'}}>
				<Typography component='h1' variant='h6'>Formulário de Restaurante</Typography>
				<Box component='form' onSubmit={event => {submitForm(event)}}>
					<TextField value={nomeRestaurante} onChange={event => SetNomeRestaurant(event.target.value)}
						id='standard-basic' 
						label='Cadastrar Restaurante' 
						variant='standard' 
						fullWidth
						required
					/>

					<Button sx={{marginTop: 1, }} fullWidth type='submit' variant='outlined'> Cadastrar </Button>
				</Box>
			</Box>
		</>
	
	)
}

export default FormularioRestaurante