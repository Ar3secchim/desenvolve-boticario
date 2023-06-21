import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './Pages/Home'
import VitrineRestaurantes from './Pages/ShowcaseRestaurants'
import AdminRestaurantes from './Pages/AdminRestaurantes/AdminRestaurantes'
import FormularioRestaurante from './Pages/AdminRestaurantes/FormularioRestaurante'
import PageLayoutAdm from './Pages/AdminRestaurantes/PageLayoutAdm'

function App() {

	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/restaurantes" element={<VitrineRestaurantes />} />

			<Route path='/admin' element={<PageLayoutAdm />}>
				<Route path="restaurantes" element={<AdminRestaurantes />} />
				<Route path="restaurantes/novo" element={<FormularioRestaurante />} />
				<Route path="restaurantes/:id" element={<FormularioRestaurante />} />
			</Route>
		</Routes>
	)
}

export default App
