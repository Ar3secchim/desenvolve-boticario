import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

import IRestaurante from '../../Types/IRestaurante'
import ITags from '../../Types/ITags'
import http from '../../http'

function FormularioPrato(){
	const [nomePrato , SetNomePrato] = useState('')
	const [descricao , SetDescricao] = useState('')

	const [tags , setTags] = useState<ITags[]>([])
	const [tag , setTag] = useState('')

	const [restaurantes , setRestaurantes] = useState<IRestaurante[]>([])
	const [restaurante , setRestaurante] = useState('')

	const [image , setImage] = useState<File | null>(null)

	useEffect(()=>{
		http.get<{tags:ITags[]}>('tags/')
			.then(res => setTags(res.data.tags))

		http.get<IRestaurante[]>('restaurantes/')
			.then(res => setRestaurantes(res.data))
	},[])

	const selectFiles = (event: React.ChangeEvent<HTMLInputElement>)=>{
		if(event.target.files?.length){
			setImage(event.target.files[0])
		}else{
			setImage(null)
		}
	} 
  
	const submitForm = (event: React.FormEvent<HTMLFormElement>)=>{
		event.preventDefault()
    
		const formData = new FormData

		formData.append('nome', nomePrato)
		formData.append('descricao', descricao)
		formData.append('tags', tag)
		formData.append('restaurante', restaurante)

		if(image){
			formData.append('imagem', image)
		}
		//formulario com binario
		http.request({
			url:'pratos/',
			method:'POST',
			headers:{
				'Content-Type': 'multipart/form-data'
			},
			data: formData
		})
			.then(() => alert('Prato cadastrado'))
			.catch(erro => console.log(erro))
	}

	return(
		<>
			<Box sx={{display: 'flex', flexDirection: 'column',  alignItems:'center', height:500, justifyContent:'center'}}>
				<Typography component='h1' variant='h6'>Formulário de Prato</Typography>

				<Box component='form' onSubmit={event => {submitForm(event)}}>
					<TextField value={nomePrato} onChange={event => SetNomePrato(event.target.value)}
						id='standard-basic' 
						label='Cadastrar Pratos' 
						variant='standard' 
						fullWidth
						required
						margin='dense'
					/>

					<TextField value={descricao} onChange={event => SetDescricao(event.target.value)}
						id='standard-basic' 
						label='Descrição' 
						variant='standard' 
						fullWidth
						required
						margin='dense'
					/>

					<FormControl sx={{marginTop:2}} margin='dense' fullWidth required>
						<InputLabel margin='dense' id="select-tag">Tag</InputLabel>

						<Select labelId="select-tag" value={tag}
							onChange={event => setTag(event.target.value)}> 
							{tags.map(
								tag => <MenuItem key={tag.id} value={tag.value}> {tag.value} </MenuItem>
							)}
						</Select>
					</FormControl>

					<FormControl sx={{marginTop:2}} margin='dense' fullWidth required>
						<InputLabel margin='dense' id="select-restaurante">Restaurante</InputLabel>

						<Select labelId="select-restaurante" value={restaurante}
							onChange={event => setRestaurante(event.target.value)}>
							{restaurantes.map(
								restaurante => <MenuItem key={restaurante.id} value={restaurante.id}> {restaurante.nome} </MenuItem>)
							}
						</Select>
					</FormControl>

					<input type='file' onChange={selectFiles} />

					<Button sx={{marginTop: 1, }} fullWidth type='submit' variant='outlined'> Cadastrar </Button>
				</Box>
			</Box>
		</>
	
	)
}

export default FormularioPrato