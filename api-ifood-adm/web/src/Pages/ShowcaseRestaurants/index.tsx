import React from 'react'
import Banner from '../../Components/Banner'
import ListaRestaurantes from '../../Components/ListRest'
import NavBar from '../../Components/NavBar'
import Rodape from '../../Components/Footer'

function App() {
	return (
		<>
			<NavBar />
			<Banner />
			<ListaRestaurantes />
			<Rodape />
		</>
	)
}

export default App
