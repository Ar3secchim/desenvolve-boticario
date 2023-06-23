import React from 'react'
import { AppBar, Box, Button, Container, Toolbar, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

function NavBarAdm(){
	return(
		<AppBar position='static'>
			<Container maxWidth='xl'>
				<Toolbar  sx={{display:'flex', justifyContent:'space-between'}}>
					<Typography>
							Administração
					</Typography>

					<Box>
						<Link  to={'/admin/restaurantes/'}>
							<Button variant="outlined" sx={{my: 2, color:'white', }} > 
									Restaurante
							</Button>
						</Link>

						<Link  to={'/admin/restaurantes/novo'}>
							<Button sx={{my: 2, color:'white'}} > 
									Cadastrar novo Restaurante	
							</Button>
						</Link>

						<Link  to={'/admin/pratos'}>
							<Button sx={{my: 2, color:'white'}} > 
									Pratos
							</Button>
						</Link>

						<Link  to={'/admin/pratos/novo'}>
							<Button sx={{my: 2, color:'white'}} > 
									Novo Prato
							</Button>
						</Link>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	)
}

export default NavBarAdm